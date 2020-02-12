import { html, TemplateResult } from 'lit-element'
import { MyComponentElement } from './component'

export default function template(this: MyComponentElement): TemplateResult {
  return html`
    <p>Hello from ${this.name}</p>
    <button @click=${this.onButtonClick}>Select me</button>
  `
}
