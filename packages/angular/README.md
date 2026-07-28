# @zeturn/watercolor-angular

Watercolor UI components for Angular (standalone components, signals).

## Install

```bash
npm install @zeturn/watercolor-angular
```

## Use

```ts
import { Component } from '@angular/core'
import { Button, ThemeProvider } from '@zeturn/watercolor-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeProvider, Button],
  template: `
    <wc-theme-provider defaultMode="system">
      <wc-button variant="primary" (clicked)="onClick()">Continue</wc-button>
    </wc-theme-provider>
  `,
})
export class AppComponent {
  onClick() {}
}
```

The package provides the same public component names as the React, Vue, Next.js, and Svelte packages.
It uses Angular standalone components with signal-based `input()`/`model()`/`output()` APIs; events are emitted as outputs such as `(clicked)`, `(changed)`, and `(closed)`.
