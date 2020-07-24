import { html, TemplateResult } from 'lit-element'
import { HygenTestElement } from './component'

export default function template(this: HygenTestElement): TemplateResult {
  return html`
    <p>
      Hello from
      <strong>hygen-test</strong>
      ${this.name}
    </p>
    <a href="/">Home</a>
  `
}
