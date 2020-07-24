import { html, TemplateResult } from 'lit-element'
import { ViewDispatchElement } from './component'

export default function template(this: ViewDispatchElement): TemplateResult {
  return html`
    <p>
      Hello from
      <strong>view-dispatch</strong>
      ${this.name}.
    </p>
    <a href="/">Home</a>
  `
}
