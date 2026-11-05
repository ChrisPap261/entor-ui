# entor-ui

Public **Entor design system** for Next.js apps: CSS tokens, themes, and React UI primitives.

**Repository:** https://github.com/ChrisPap261/entor-ui

## Packages

| Package | Description |
|---------|-------------|
| [`@entor/theme`](./packages/entor-theme) | Colors, radius, themes (`theme-casual`, …), `.widget-card`, `.header-btn`, fonts |
| [`@entor/ui`](./packages/entor-ui) | `WidgetScroll`, `FilterTabs`, `Checkbox`, `viewShellClass`, `cn` |

Full class inventory: [`packages/entor-theme/DESIGN.md`](./packages/entor-theme/DESIGN.md).

## Install in your app

```bash
npm install github:ChrisPap261/entor-ui#v1.0.0:packages/entor-theme
npm install github:ChrisPap261/entor-ui#v1.0.0:packages/entor-ui
```

Or in `package.json`:

```json
{
  "dependencies": {
    "@entor/theme": "github:ChrisPap261/entor-ui#v1.0.0:packages/entor-theme",
    "@entor/ui": "github:ChrisPap261/entor-ui#v1.0.0:packages/entor-ui",
    "lucide-react": "^1.37.0"
  }
}
```

Pin a **tag** (`v1.0.0`) or commit SHA — avoid `#main` in production.

### Tailwind v4 + Next.js

**`src/app/globals.css`**

```css
@import "tailwindcss";
@import "../../node_modules/@entor/theme/src/entor.css";
```

If your bundler resolves package exports, you can use `@import "@entor/theme/entor.css";` instead.

**`layout.tsx`**

```tsx
import { entorFontClassNames } from "@entor/theme/fonts";
import { appearanceBootstrapScript } from "@entor/theme/appearance";

<html className={`${entorFontClassNames()} theme-casual antialiased`}>
```

**`next.config.ts`**

```ts
transpilePackages: ["@entor/theme", "@entor/ui"],
```

## Starter template

```bash
cd templates/entor-starter
npm install
npm run dev
```

Opens http://localhost:3001.

## Versioning

Tags on this repo (`v1.0.0`, `v1.1.0`, …). Bump the `#v…` ref in consuming apps when you want updates.

## License

MIT
