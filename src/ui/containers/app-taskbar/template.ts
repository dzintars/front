import { html, TemplateResult } from 'lit-element'
import { AppTaskbarElement } from './component'
import { Icon } from '../../assets/svg'

export default function template(this: AppTaskbarElement): TemplateResult {
  return html`
    <div class="left">
      <div class="launcher">
        <button class="m icn" @click="${this.displayLauncher}" id="launcher" title="Launcher">
          <i class="m">${Icon('apps', 'Launcher')}</i>
        </button>
      </div>
      <h2>Home</h2>
    </div>
    <div class="middle">
      <div class="fieldset">
        <input name="search" type="search" />
      </div>
    </div>
    <div class="right">
      <button class="m icn" @click=${this.toggleActionCenter} title="Action Center">
        <i class="m">${Icon('gear', '')}</i>
      </button>
      <button class="m" @click=${this.switchTheme}>
        <span>Theme</span>
      </button>
    </div>
  `
}
