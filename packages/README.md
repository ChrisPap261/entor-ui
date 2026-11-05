# Entor design system (monorepo)

Reusable Entor look & feel for other Next.js apps.

| Package | Version | Contents |
|---------|---------|----------|
| [`@entor/theme`](./entor-theme) | 1.0.0 | CSS tokens, themes, `.widget-*` classes, fonts, appearance helpers |
| [`@entor/ui`](./entor-ui) | 1.0.0 | `WidgetScroll`, `FilterTabs`, `Checkbox`, `viewShellClass`, `cn` |

The main **Entor** app consumes these packages from GitHub: [ChrisPap261/entor-ui](https://github.com/ChrisPap261/entor-ui).

## Quick start (starter in this repo)

```bash
cd templates/entor-starter
npm run dev
```

## Use in another repository

```json
"@entor/theme": "github:ChrisPap261/entor-ui#v1.0.0:packages/entor-theme",
"@entor/ui": "github:ChrisPap261/entor-ui#v1.0.0:packages/entor-ui"
```

See the [root README](../README.md) for Tailwind / Next setup.

## Inventory checklist

When building screens, prefer Entor primitives over ad-hoc Tailwind grays:

- Surfaces: `widget-card`, `bg-paper`, `bg-card`
- Typography: `display-title`, `text-ink`, `text-ink-soft`
- Controls: `header-btn`, `inset-box`, `filter-tabs`
- Layout: `gap-gutter`, `p-gutter`, `app-page-fill`, `viewShellClass()`
- Lists: `row-line`, `WidgetScroll`
