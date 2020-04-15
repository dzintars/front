import { html, TemplateResult } from 'lit-element'
import { AppShortcutsElement } from './component'
import { repeat } from 'lit-html/directives/repeat'
import { Icon } from '../../assets/svg'

export default function template(this: AppShortcutsElement): TemplateResult {
  return html`
    <div class="icon">
      <button>${Icon('arrow-left', 'Back')}</button>
    </div>
    ${repeat(
      this.modules.order,
      key => html`
        <div class="icon">
          <button>${Icon(this.modules.entities[key].icon, this.modules.entities[key].name)}</button>
        </div>
      `
    )}
  `
}
