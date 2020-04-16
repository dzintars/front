import { html, TemplateResult } from 'lit-element'
import { ActionCenterElement } from './component'
import { Icon } from '../../assets/svg'

export default function template(this: ActionCenterElement): TemplateResult {
  return html`
    <main>
      <nav>
        <button class="m icn" title="Accounts">
          <i>${Icon('user', 'Account')}</i>
        </button>
      </nav>
      <div></div>
    </main>
  `
}
