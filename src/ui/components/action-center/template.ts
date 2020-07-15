import { html, TemplateResult } from 'lit-element'
import { ActionCenterElement } from './component'
import { Icon } from '../../../assets/svg'
import '../../views/app-signup'

export default function template(this: ActionCenterElement): TemplateResult {
  return html`
    <main>
      <nav>
        <button class="m icn" title="Accounts">
          <i>${Icon('user', 'Account')}</i>
        </button>
        <button class="m icn" title="Theme">
          <i>${Icon('palette', 'Theme')}</i>
        </button>
      </nav>
      <div>
        <app-signup noshadow></app-signup>
      </div>
    </main>
  `
}
