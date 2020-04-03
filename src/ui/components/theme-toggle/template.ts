import { html, TemplateResult } from 'lit-element'
import { ThemeToggleElement } from './component'

export default function template(this: ThemeToggleElement): TemplateResult {
  return html`
    <button id="toggle" @click="${this.toggleTheme}" title="Switch theme">
      ${this.btnTitle}
    </button>
  `
}
