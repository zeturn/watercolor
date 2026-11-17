# React / Next.js icon migration and build boundaries

The React Icon API now renders an explicitly supplied component. It never loads
an icon provider. React and Next no longer declare icon adapter peers. Existing
adapter package names remain unchanged.

```tsx
import Icon from '@zeturn/watercolor-react/Icon'
import Button from '@zeturn/watercolor-react/Button'
import DatabaseIcon from '@zeturn/watercolor-icons-lucide-react/Database'
import '@zeturn/watercolor-react/style.css'

<Button><Icon component={DatabaseIcon} size={20} /> Database</Button>
<Icon component={DatabaseIcon} label="Database" />
```

Unlabelled icons are decorative. Supply `label`, `aria-label`, `aria-labelledby`
or `title` for a meaningful standalone icon. Attributes, events, styles and refs
are forwarded to the supplied SVG component. `strokeWidth` and provider-specific
props such as Phosphor `weight` can be passed explicitly.

## Import one icon

| Adapter | Example leaf import |
| --- | --- |
| Lucide React | `@zeturn/watercolor-icons-lucide-react/Database` |
| Tabler React | `@zeturn/watercolor-icons-tabler-react/IconDatabase` |
| Heroicons React | `@zeturn/watercolor-icons-heroicons-react/24/outline/HeartIcon` |
| Phosphor React | `@zeturn/watercolor-icons-phosphor-react/Database` |
| Feather SVG string | `@zeturn/watercolor-icons-feather/Database` |

Each React adapter's root exposes `createIconResolver` for a **small map you
explicitly supply**; it does not import or register the provider catalog. The
upstream provider and React are peers of that adapter. Install only the adapter
you intend to use. Direct imports of upstream components also work with Icon.

Feather leaf entries export static SVG strings. Pass one as `html={databaseSvg}`,
or use `renderFeatherSvg(databaseSvg, options)` from the Feather root. Its former
name-based loader lives only at `/legacy` for existing Vue and Solid internals;
it is outside the React/Next dependency graph. Vue's other adapters retain their
existing API in this change.

## Migrate existing code

Replace the former `<Icon library="lucide" name="database" />` with the explicit
component shown above. Installing a provider or writing its name in configuration
does not enable automatic name lookup. Legacy React name-only calls render the
existing fallback and issue one migration warning; they do not download a catalog.

For a finite list of names, import its components explicitly and keep the map in
the application. Do not import an upstream icon namespace or dynamic-name barrel.
For asynchronously loaded icons, declare `React.lazy(() => import('.../Database'))`
in the application with a literal single-icon subpath and a Suspense boundary.

For Next.js, use `@zeturn/watercolor-next/Button`, `/Card`, `/Icon`, etc. Each entry
retains its `use client` boundary. Keep the icon component and the Icon consuming
it inside a Client Component. Functions cannot be passed from a Server Component
to a Client Component as props. Root imports remain supported. Import the
stylesheet once from the application root as before.

## Installer

```bash
npx watercolor-ui --framework react --icons none --dry-run
npx watercolor-ui --framework react --icons lucide
```

The CLI prints its installation plan and records `iconProvider` plus
`iconImports: "explicit"` in `watercolor.config.json` after a successful install.
Dry runs change no files. There is no postinstall hook.

## Regression checks

Build core, React, Next and the icon adapters first, then run:

```bash
npm run audit:icons
npm run test:installer
npm run typecheck:icons
npm run test:icon-builds
```

The last command installs real local tarballs into an isolated consumer containing
only Lucide. Vite tests the root entry with no icons, the root entry with one icon,
and deep component imports. Next tests root and deep entries, prerendered SVG output
and Webpack module graphs. A matching empty Next app establishes the framework's
own JS size; the test budgets both the total and the extra Watercolor JS. Other providers must be absent from both installation
and module graphs. Bundle and RSS ceilings are in
`tests/fixtures/icon-build/budgets.json`. Next RSS is the conservative sum of each
Node process's peak; Vite RSS is one Node process's peak. Results and command logs
are written to `.cache/icon-build/`. These fixtures do not measure HashSlip itself.

This API is introduced in Watercolor 2.0.0. Migrate consumers before removing
their existing icon aliases or other workarounds.
