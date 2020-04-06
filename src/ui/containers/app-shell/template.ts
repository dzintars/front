import { html, TemplateResult } from 'lit-element'
import { AppShellElement } from './component'
import { DzintarsDev, User, Apps, Grid, Gear } from '../../assets/svg'
import '../../containers/app-taskbar'
import '../../views/app-home'
import '../../components/action-center'

export default function template(this: AppShellElement): TemplateResult {
  return html`
    <app-taskbar>
      <button slot="left" @click="${this.displayLauncher}" id="launcher" class="launcher" title="Open Launcher">
        ${Apps()}
      </button>
      <h2 slot="middle">Home application</h2>
      <button slot="right" @click=${this.toggleActionCenter}>
        ${Gear()}
      </button>
      <button slot="right" @click=${this.switchTheme}>Theme</button>
    </app-taskbar>
    <main>
      <app-home .applications=${this.entities}></app-home>
      ${this.isActionCenterDisplayed
        ? html`
            <action-center></action-center>
          `
        : html``}
    </main>
  `
}
