import { html, TemplateResult } from 'lit-element'
import { ApplicationShortcutElement } from './component'

export default function template(this: ApplicationShortcutElement): TemplateResult {
  return html`
    ${this.title}
  `
}
