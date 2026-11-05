# Entor Starter

Minimal Next.js app wired to **`@entor/theme`** and **`@entor/ui`**.

## Run (from this folder)

```bash
cd templates/entor-starter
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

From monorepo root you can run `npm install` once (links `file:../../packages/*` into this app’s `node_modules`), then `cd templates/entor-starter && npm run dev`.

## Copy to a new project

1. Copy `packages/entor-theme` and `packages/entor-ui` into your monorepo (or publish them).
2. Copy this folder’s `src/app`, `postcss.config.mjs`, `next.config.ts`, and `tsconfig` paths.
3. Add dependencies: `next`, `react`, `tailwindcss`, `@tailwindcss/postcss`, `lucide-react`.
4. Set `<html className="… theme-casual …">` and import `@entor/theme/entor.css` after `@import "tailwindcss"`.

See [`packages/entor-theme/DESIGN.md`](../../packages/entor-theme/DESIGN.md) for the full class inventory.
