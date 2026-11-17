# @zeturn/watercolor-react

Watercolor UI components for React 18 and 19. Built with TypeScript.

## Install

```bash
npm install @zeturn/watercolor-react
```

## Usage

```ts
import '@zeturn/watercolor-react/style.css'
import { Button } from '@zeturn/watercolor-react'
```

Icon packs are optional. Install only the Watercolor wrapper you use, for
example `npm install @zeturn/watercolor-icons-lucide-react`.

```tsx
import Icon from '@zeturn/watercolor-react/Icon'
import DatabaseIcon from '@zeturn/watercolor-icons-lucide-react/Database'

<Icon component={DatabaseIcon} label="Database" />
```

Component subpaths such as `@zeturn/watercolor-react/Button` are independent
entries. Icon imports no providers. The former `library/name` loader has been
removed; see the [migration guide](../../docs/guide/icon-performance.md).

## Docs

- https://zeturn.github.io/watercolor/
- Storybook: https://zeturn.github.io/watercolor/react/

## License

ISC
