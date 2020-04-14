import { html, TemplateResult } from 'lit-element'
import { AppShellElement } from './component'
import { Apps, Gear, Icon } from '../../assets/svg'
import '../../containers/app-taskbar'
import '../../components/app-shortcuts'
import '../../components/action-center'
import '../../views/app-home'
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
        <div class="left">
          <h2>Home</h2>
        </div>
        <div class="mid">
          <div class="fieldset">
            <input id="customer_name" name="customerName" type="text" />
          </div>
        </div>
        <div class="right"></div>
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
