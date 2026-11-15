# Vendored Midnite UI

Source: [bilo-io/midnite-ui](https://github.com/bilo-io/midnite-ui), `packages/ui/src`, as vendored
in [bilo-io/bilo](https://github.com/bilo-io/bilo) at commit **`73970a3`**. MIT licence, see `LICENSE`.

`@bilo-io/ui` is published only to GitHub Packages (needs a token), so the pieces used here are copied.
To update, re-copy from a newer commit and bump the hash above.

| Path | Changed? |
| --- | --- |
| `lib/cn.ts`, `components/button.tsx`, `components/theme-toggle.tsx`, `theme/theme-script.ts`, `styles/tokens.css` | no |
| `theme/theme-context.tsx` | **yes**: `localStorage` access wrapped in `try/catch` (`[vendored adaptation]`) |

Site wiring lives outside this folder: `src/styles/midnite.css`, `tailwind.config.ts`, `postcss.config.mjs`, `src/components/theme-menu.jsx`.
