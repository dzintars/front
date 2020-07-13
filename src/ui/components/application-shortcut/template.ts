import { html, TemplateResult } from 'lit-element'
import { ApplicationShortcutElement } from './component'
import { Icon } from '../../assets/svg'

export default function template(this: ApplicationShortcutElement): TemplateResult {
  return html`
    <p>${this.name}</p>
    ${this.menuItems
      ? html`
          ${Icon('chevron-right', 'Modules')}
        `
      : html``}
  `
}
