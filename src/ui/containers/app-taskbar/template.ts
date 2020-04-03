import { html, TemplateResult } from 'lit-element'
import { AppTaskbarElement } from './component'
// import '../../components/main-taskbar'

export default function template(this: AppTaskbarElement): TemplateResult {
  return html`
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
  `
}
