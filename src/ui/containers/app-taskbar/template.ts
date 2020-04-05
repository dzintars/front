import { html, TemplateResult } from 'lit-element'
import { AppTaskbarElement } from './component'
// import '../../components/main-taskbar'

export default function template(this: AppTaskbarElement): TemplateResult {
  return html`
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  `
}
