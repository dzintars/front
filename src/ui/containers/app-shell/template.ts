import { html, TemplateResult } from 'lit-element'
import { AppShellElement } from './component'
import { DzintarsDev, User, Apps, Grid, Gear, Icon } from '../../assets/svg'
import '../../containers/app-taskbar'
import '../../views/app-home'
import '../../components/action-center'
import '../../components/app-shortcuts'
import '../../containers/ui-statusbar-connected'

export default function template(this: AppShellElement): TemplateResult {
  return html`
    <app-taskbar>
      <div class="icon" slot="left">
        <button @click="${this.displayLauncher}" id="launcher" class="launcher" title="Launcher">
          ${Apps()}
        </button>
      </div>
      <div class="taskbar-middle" slot="middle">
        <h2>Home</h2>
      </div>
      <button slot="right" @click=${this.toggleActionCenter} title="Action Center">
        ${Gear()}
      </button>
      <button slot="right" @click=${this.switchTheme}><span>Theme</span></button>
    </app-taskbar>
    <main>
      <app-shortcuts>
        <div class="icon">
          <button>${Icon('arrow-left', 'Back')}</button>
        </div>
      </app-shortcuts>
      <app-home .applications=${this.entities}></app-home>
      ${this.isActionCenterDisplayed
        ? html`
            <action-center></action-center>
          `
        : html``}
    </main>
    <ui-statusbar-connected></ui-statusbar-connected>
  `
}
