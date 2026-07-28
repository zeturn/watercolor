import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-page',
  standalone: true,
  template: `
    <div class="wc-page {{ className() }}">
      <header class="wc-page__header"><ng-content select="[wcHeader]" /></header>
      <main class="wc-page__body"><ng-content /></main>
      <footer class="wc-page__footer"><ng-content select="[wcFooter]" /></footer>
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-page{display:flex;flex-direction:column;min-height:100%;box-sizing:border-box}
.wc-page__header{padding:16px;border-bottom:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}
.wc-page__header:empty,.wc-page__footer:empty{display:none}
.wc-page__body{flex:1 1 auto;padding:16px;min-width:0}
.wc-page__footer{padding:16px;border-top:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page {
  readonly className = input('')
}
