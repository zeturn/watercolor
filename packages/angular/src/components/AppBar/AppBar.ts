import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-app-bar',
  standalone: true,
  template: `
    <header class="wc-app-bar wc-app-bar--{{ color() }} wc-app-bar--{{ position() }} {{ className() }}">
      <div class="wc-app-bar__start"><ng-content select="[wcStart]" /></div>
      @if (title()) {
        <div class="wc-app-bar__title">{{ title() }}</div>
      } @else {
        <ng-content />
      }
      <div class="wc-app-bar__end"><ng-content select="[wcEnd]" /></div>
    </header>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-app-bar{display:flex;align-items:center;gap:12px;min-height:56px;padding:0 16px;box-sizing:border-box;background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a);border-bottom:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}
.wc-app-bar--primary{background:var(--wc-accent,#3b82f6);color:#fff;border-bottom-color:transparent}
.wc-app-bar--secondary{background:var(--wc-text-primary,#1a1a1a);color:#fff;border-bottom-color:transparent}
.wc-app-bar--surface{background:var(--wc-surface-subtle,#f1f3f5)}
.wc-app-bar--sticky{position:sticky;top:0;z-index:1000}
.wc-app-bar--fixed{position:fixed;top:0;left:0;right:0;z-index:1000}
.wc-app-bar__title{font-size:1.125rem;font-weight:600;flex:1 1 auto}
.wc-app-bar__start,.wc-app-bar__end{display:flex;align-items:center;gap:8px;flex:0 0 auto}
.wc-app-bar__start:empty,.wc-app-bar__end:empty{display:none}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBar {
  readonly title = input('')
  readonly color = input<'default' | 'primary' | 'secondary' | 'surface'>('default')
  readonly position = input<'static' | 'sticky' | 'fixed'>('static')
  readonly className = input('')
}
