import { EB_Garamond, Inter, Source_Sans_3 } from "next/font/google";

export const entorDisplayFont = EB_Garamond({
  subsets: ["latin", "latin-ext", "greek"],
  variable: "--font-display",
  display: "swap",
});

export const entorSansFont = Source_Sans_3({
  subsets: ["latin", "latin-ext", "greek"],
  variable: "--font-source-sans",
  display: "swap",
});

export const entorUiFont = Inter({
  subsets: ["latin", "latin-ext", "greek"],
  variable: "--font-inter",
  display: "swap",
});

/** Class names for `<html>` — pairs with CSS `--font-inter` / `--ui-sans`. */
export function entorFontClassNames(): string {
  return `${entorDisplayFont.variable} ${entorSansFont.variable} ${entorUiFont.variable}`;
}
