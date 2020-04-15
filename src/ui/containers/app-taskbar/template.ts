import { html, TemplateResult } from 'lit-element'
import { AppTaskbarElement } from './component'
import { Icon } from '../../assets/svg'

export default function template(this: AppTaskbarElement): TemplateResult {
  return html`
    <div class="left">
      <button class="m icn" @click="${this.displayLauncher}" id="launcher" title="Launcher">
        <i class="m">${Icon('apps', 'Launcher')}</i>
      </button>
      <h2>Home</h2>
    </div>
    <div class="middle">
      <div class="fieldset">
        <input id="customer_name" name="customerName" type="text" />
      </div>
    </div>
    <div class="right">
      <button class="m icn" @click=${this.toggleActionCenter} title="Action Center">
        <i class="m">${Icon('gear', 'Action Center')}</i>
      </button>
      <button class="m" @click=${this.switchTheme}>
        <span>Theme</span>
      </button>
    </div>
  `
}
