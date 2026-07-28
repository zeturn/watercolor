import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core'

@Component({
  selector: 'wc-icon',
  standalone: true,
  template: `
    <svg
      class="wc-icon {{ className() }}"
      [attr.width]="dim()"
      [attr.height]="dim()"
      viewBox="0 0 24 24"
      fill="none"
      [attr.stroke]="color()"
      [attr.stroke-width]="strokeWidth()"
      stroke-linecap="round"
      stroke-linejoin="round"
      [attr.role]="title() ? 'img' : null"
      [attr.aria-hidden]="title() ? null : true"
    >
      @if (title()) {
        <title>{{ title() }}</title>
      }
      @if (path()) {
        <path [attr.d]="path()" />
      }
      <ng-content />
    </svg>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-icon{display:inline-block;flex:0 0 auto;vertical-align:middle}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly path = input('')
  readonly size = input<string | number>('1.25em')
  readonly color = input('currentColor')
  readonly strokeWidth = input(2)
  readonly className = input('')
  readonly title = input('')

  readonly dim = computed(() => (typeof this.size() === 'number' ? `${this.size()}px` : String(this.size())))
}
