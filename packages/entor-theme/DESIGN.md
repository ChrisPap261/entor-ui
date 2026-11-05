# Entor design system (`@entor/theme` v1.0.0)

Reusable tokens, themes, and global CSS classes from the Entor app.

## Install (monorepo / workspace)

```json
"dependencies": {
  "@entor/theme": "file:packages/entor-theme",
  "@entor/ui": "file:packages/entor-ui"
}
```

In app CSS (Tailwind v4):

```css
@import "tailwindcss";
@import "../../packages/entor-theme/src/entor.css";
```

When the package is installed under `node_modules` (standalone app), this also works:

```css
@import "@entor/theme/entor.css";
```

(PostCSS in some monorepo/dev setups may not resolve package exports; use the relative path to `packages/entor-theme` if dev shows a CSS resolve error.)

In `layout.tsx`:

```tsx
import { entorFontClassNames } from "@entor/theme/fonts";
import { appearanceBootstrapScript } from "@entor/theme/appearance";

<html className={`${entorFontClassNames()} theme-casual antialiased`}>
```

## Theme classes on `<html>`

| Class | Role |
|-------|------|
| `theme-classic` | Gray, uppercase titles, bordered controls |
| `theme-casual` | Apple-like, pill controls (Entor default) |
| `theme-high-contrast` | Sharp corners, minimal shadow |
| `dark` | Dark palette (pair with any theme) |

## CSS variables (tokens)

| Token | Use |
|-------|-----|
| `--paper`, `--paper-2`, `--card` | Surfaces |
| `--ink`, `--ink-soft` | Text |
| `--line` | Borders, dividers |
| `--accent`, `--accent-soft` | Links, highlights |
| `--radius-card`, `--radius-control`, `--radius-item` | Radius scale |
| `--page-gutter` | Layout spacing (`gap-gutter` in Tailwind) |
| `--shadow`, `--card-border` | Cards |
| `--active`, `--on-active` | Selected tabs / nav |
| `--segment`, `--segment-active` | Casual segmented controls |

Tailwind colors map via `@theme inline`: `bg-paper`, `text-ink`, `border-line`, etc.

## Global component classes

| Class | Use |
|-------|-----|
| `.widget-card` | Primary card surface |
| `.widget-pad`, `.widget-pad-x`, `.widget-pad-t`, `.widget-pad-narrow` | In-card padding |
| `.widget-scroll` | Flex child scroll region (+ `.is-overflowing`) |
| `.app-page-fill` | Full-height page column inside shell |
| `.display-title` | Section / brand typography |
| `.header-btn` | Icon and text buttons in headers |
| `.inset-box` | Inputs and inline fields |
| `.filter-tabs`, `.filter-tab`, `.filter-tab-active` | Segmented filters |
| `.row-line` | List row dividers (theme overrides) |
| `.site-header` | Top header bar |
| `.mini-select`, `.mini-select-wrap` | Compact selects |
| `.icon-well` | Icon containers |
| `.layout-row`, `.size-tabs`, `.size-tab` | Customize panel layout |
| `.theme-checkbox` | Checkbox styling (with `@entor/ui` Checkbox) |
| `.chat-md-bullets` | Markdown bullet lists in chat |

## Fonts

- `--font-display` (EB Garamond)
- `--font-source-sans` (Source Sans 3)
- `--font-inter` (Inter) — default UI via `--ui-sans` / `--ui-serif`

## Peer dependencies

- `next` (for `next/font` in `./fonts`)

## Related package

Use **`@entor/ui`** for React primitives (`WidgetScroll`, `FilterTabs`, `Checkbox`, `viewShellClass`).

See **`templates/entor-starter`** for a minimal Next.js app wired to both packages.
