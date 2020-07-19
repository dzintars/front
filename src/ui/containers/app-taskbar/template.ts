import { html, TemplateResult } from 'lit-element'
import { AppTaskbarElement } from './component'
import { Icon } from '../../../assets/svg'

export default function template(this: AppTaskbarElement): TemplateResult {
  return html`
    <div class="left">
      <div class="launcher">
        <button
          class="btn btn--lg"
          @click="${this.displayLauncher}"
          id="launcher"
          title="Launcher"
          aria-label="Open launcher"
        >
          ${Icon('apps', 'Launcher', 'icon-btn__icon')}
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
      <button class="btn btn--md" @click=${this.toggleActionCenter} title="Action Center">
        ${Icon('gear', '', 'btn__icon')} Actions
      </button>
      <button class="btn btn--md" @click=${this.switchTheme}>
        <span>Theme Switch</span>
      </button>
    </div>
  `
}
