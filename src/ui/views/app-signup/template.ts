import { html, TemplateResult } from 'lit-element'
// import '../../components/main-taskbar'

export default function template(): TemplateResult {
  return html`
    <slot name="workspace"></slot>
  `
}
