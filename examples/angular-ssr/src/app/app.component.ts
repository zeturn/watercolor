import { Component } from '@angular/core'
import {
  Button,
  Card,
  CardContent,
  Container,
  LocaleProvider,
  Page,
  Stack,
  Switch,
  ThemeProvider,
  Typography,
} from '@zeturn/watercolor-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ThemeProvider,
    LocaleProvider,
    Page,
    Container,
    Stack,
    Typography,
    Card,
    CardContent,
    Button,
    Switch,
  ],
  template: `
    <wc-theme-provider #theme defaultMode="system" themeUrl="/theme.json">
      <wc-locale-provider>
        <wc-page>
          <wc-container>
            <wc-stack gap="lg">
              <wc-typography variant="h1">Watercolor on Angular SSR</wc-typography>
              <wc-typography variant="body1">
                This page is server-side rendered by Angular. The theme init script injected in
                server.ts resolves the color mode before hydration, so there is no flash of the
                wrong theme.
              </wc-typography>
              <wc-card>
                <wc-card-content>
                  <wc-stack gap="sm">
                    <wc-button variant="primary">Primary action</wc-button>
                    <wc-button variant="outlined">Outlined action</wc-button>
                    <wc-switch [checked]="true" />
                    <wc-button variant="text" (clicked)="theme.toggleMode()">
                      Toggle theme (current: {{ theme.resolvedMode }})
                    </wc-button>
                  </wc-stack>
                </wc-card-content>
              </wc-card>
            </wc-stack>
          </wc-container>
        </wc-page>
      </wc-locale-provider>
    </wc-theme-provider>
  `,
})
export class AppComponent {}
