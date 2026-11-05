import type { Metadata } from "next";
import { appearanceBootstrapScript } from "@entor/ui/appearance";
import { entorFontClassNames } from "@entor/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entor Starter",
  description: "Minimal app using @entor/ui",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${entorFontClassNames()} theme-casual min-h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: appearanceBootstrapScript({
              schemeKey: "entor-starter-scheme",
            }),
          }}
        />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
