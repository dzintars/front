import { html, TemplateResult } from 'lit-element'
import { AppHomeElement } from './component'
import '../../containers/app-taskbar'
// import '../../components/theme-toggle'
import { DzintarsDev, User, Apps, Grid } from '../../assets/svg'

export default function template(this: AppHomeElement): TemplateResult {
  return html`
    <app-taskbar>
      <button slot="left" @click="${this.displayLauncher}" id="launcher" class="launcher" title="Open Launcher">
        ${Apps()}
      </button>
      <button slot="right" @click=${this.switchTheme}>Theme</button>
      <h2 slot="middle">Home applications</h2>
    </app-taskbar>
  `
}
