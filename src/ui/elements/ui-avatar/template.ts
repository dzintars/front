import { html, TemplateResult } from 'lit-element'
import { UiAvatarElement } from './component'

export default function template(this: UiAvatarElement): TemplateResult {
  return html`
    <img src=${this.src} alt=${this.alt} @click=${this.onButtonClick} />
  `
}
