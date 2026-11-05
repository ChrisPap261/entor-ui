# entor-ui

Public **Entor design system** for Next.js: one package with CSS tokens, themes, fonts, and React UI.

**https://github.com/ChrisPap261/entor-ui**

## Install

```bash
npm install github:ChrisPap261/entor-ui#v1.0.1
```

`package.json`:

```json
{
  "dependencies": {
    "@entor/ui": "github:ChrisPap261/entor-ui#v1.0.1",
    "lucide-react": "^1.37.0"
  }
}
```

Pin a **tag** (`v1.0.1`) when you want stable builds.

## Setup (Next.js + Tailwind v4)

**`globals.css`**

```css
@import "tailwindcss";
@import "../../node_modules/@entor/ui/src/entor.css";
```

**`layout.tsx`**

```tsx
import { entorFontClassNames } from "@entor/ui/fonts";
import { appearanceBootstrapScript } from "@entor/ui/appearance";

<html className={`${entorFontClassNames()} theme-casual antialiased`}>
  <head>
    <script dangerouslySetInnerHTML={{ __html: appearanceBootstrapScript() }} />
  </head>
```

**`next.config.ts`**

```ts
transpilePackages: ["@entor/ui"],
```

## Components & classes

```tsx
import { WidgetScroll, FilterTabs, Checkbox, viewShellClass } from "@entor/ui";
```

Use CSS classes: `widget-card`, `header-btn`, `display-title`, `gap-gutter`, `border-line`, …

Full list: [DESIGN.md](./DESIGN.md)

## Legacy `@entor/theme`

Merged into `@entor/ui`. Use `@entor/ui/entor.css` and `@entor/ui/fonts` instead of `@entor/theme/*`.

## Starter

See [`templates/entor-starter`](./templates/entor-starter).

## License

MIT
