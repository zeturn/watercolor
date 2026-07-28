import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-code-block',
  standalone: true,
  template: `
    <div class="wc-code-block {{ className() }}">
      @if (language()) {
        <div class="wc-code-block__header"><span class="wc-code-block__lang">{{ language() }}</span></div>
      }
      <pre class="wc-code-block__pre"><code><ng-content />{{ code() }}</code></pre>
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-code-block{background:var(--wc-surface-subtle,#1e1e2e);color:#e4e4e7;border-radius:8px;overflow:hidden;box-sizing:border-box}
.wc-code-block__header{padding:6px 12px;font-size:0.75rem;color:#a1a1aa;border-bottom:1px solid rgba(255,255,255,0.08)}
.wc-code-block__pre{margin:0;padding:12px 16px;overflow-x:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:0.8125rem;line-height:1.5}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBlock {
  readonly code = input('')
  readonly language = input('')
  readonly className = input('')
}
