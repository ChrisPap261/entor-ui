export type ColorSchemeMode = "light" | "dark" | "system" | "schedule";

export const DEFAULT_COLOR_SCHEME_MODE: ColorSchemeMode = "light";

export type AppearanceBootstrapOptions = {
  /** localStorage key for color scheme mode */
  schemeKey?: string;
  /** Legacy boolean dark preference key */
  legacyDarkKey?: string;
  /** When mode is `schedule`, return true for dark UI */
  scheduleIsDark?: () => boolean;
  defaultLat?: number;
  defaultLon?: number;
  weatherStorageKey?: string;
};

const DEFAULT_SCHEME_KEY = "entor-color-scheme";
const DEFAULT_LEGACY_DARK_KEY = "entor-dark";

export function readColorSchemeMode(
  schemeKey = DEFAULT_SCHEME_KEY,
): ColorSchemeMode | null {
  try {
    const raw = localStorage.getItem(schemeKey);
    if (
      raw === "light" ||
      raw === "dark" ||
      raw === "system" ||
      raw === "schedule"
    ) {
      return raw;
    }
    return null;
  } catch {
    return null;
  }
}

export function writeColorSchemeMode(
  mode: ColorSchemeMode,
  schemeKey = DEFAULT_SCHEME_KEY,
) {
  try {
    localStorage.setItem(schemeKey, mode);
  } catch {
    /* blocked storage */
  }
}

export function resolveIsDark(
  mode: ColorSchemeMode,
  scheduleIsDark: () => boolean,
): boolean {
  switch (mode) {
    case "light":
      return false;
    case "dark":
      return true;
    case "system":
      if (typeof window === "undefined") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    case "schedule":
      return scheduleIsDark();
    default:
      return false;
  }
}

/**
 * Inline script for first paint (dark class on `<html>` before React hydrates).
 */
export function appearanceBootstrapScript(
  options: AppearanceBootstrapOptions = {},
): string {
  const schemeKey = JSON.stringify(options.schemeKey ?? DEFAULT_SCHEME_KEY);
  const darkKey = JSON.stringify(options.legacyDarkKey ?? DEFAULT_LEGACY_DARK_KEY);
  const weatherKey = JSON.stringify(options.weatherStorageKey ?? "");
  const defaultLat = options.defaultLat ?? 37.9838;
  const defaultLon = options.defaultLon ?? 23.7275;
  const useSchedule = options.scheduleIsDark ? "true" : "false";

  return `(function(){
try{
var schemeKey=${schemeKey},darkKey=${darkKey},weatherKey=${weatherKey};
var useSched=${useSchedule};
var mode=localStorage.getItem(schemeKey);
var dark=false;
function sys(){return window.matchMedia("(prefers-color-scheme: dark)").matches}
function sunIsNight(lat,lon,t){
var dayMs=864e5,J1970=2440588,J2000=2451545,rad=Math.PI/180;
function toJulian(d){return d/dayMs-0.5+J1970}
function toDays(d){return toJulian(d)-J2000}
function sma(d){return rad*(357.5291+0.98560028*d)}
function ecl(M){var C=rad*(1.9148*Math.sin(M)+0.02*Math.sin(2*M)+0.0003*Math.sin(3*M));return M+C+rad*102.9372+Math.PI}
function decl(l){return Math.asin(Math.sin(l)*Math.sin(rad*23.4397))}
function ha(h,phi,d){return Math.acos(Math.max(-1,Math.min(1,(Math.sin(h)-Math.sin(phi)*Math.sin(d))/(Math.cos(phi)*Math.cos(d)))))}
function jc(d,lw){return Math.round(d-0.0009-lw/(2*Math.PI))}
function at(Ht,lw,n){return 0.0009+(Ht+lw)/(2*Math.PI)+n}
function stJ(ds,M,L){return J2000+ds+0.0053*Math.sin(M)-0.0069*Math.sin(2*L)}
function gsJ(h,lw,phi,dec,n,M,L){var w=ha(h,phi,dec),a=at(w,lw,n);return stJ(a,M,L)}
function fromJ(j){return new Date((j+0.5-J1970)*dayMs)}
var lw=rad*-lon,phi=rad*lat,d=toDays(t),n=jc(d,lw),ds=at(0,lw,n),M=sma(ds),L=ecl(M),dec=decl(L),h=rad*-0.833;
var Jnoon=stJ(ds,M,L),Jset=gsJ(h,lw,phi,dec,n,M,L),Jrise=Jnoon-(Jset-Jnoon);
var rise=fromJ(Jrise),set=fromJ(Jset);
return t<rise.getTime()||t>=set.getTime()
}
function sched(){
var lat=${defaultLat},lon=${defaultLon};
if(weatherKey){try{
var w=JSON.parse(localStorage.getItem(weatherKey)||"null");
if(w&&typeof w.lat==="number"&&typeof w.lon==="number"){lat=w.lat;lon=w.lon}
}catch(e){}}
return sunIsNight(lat,lon,Date.now())
}
if(mode==="light")dark=false;
else if(mode==="dark")dark=true;
else if(mode==="system")dark=sys();
else if(mode==="schedule")dark=useSched?sched():sys();
else{
var leg=localStorage.getItem(darkKey);
if(leg==="false")dark=false;
else if(leg==="true")dark=true;
else dark=sys();
}
document.documentElement.classList.toggle("dark",dark);
}catch(e){}
})();`;
}
