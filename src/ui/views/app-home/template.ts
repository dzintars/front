import { html, TemplateResult } from 'lit-element'
import { repeat } from 'lit-html/directives/repeat'
import { AppHomeElement } from './component'
import { DzintarsDev, User, Apps } from '../../assets/svg'
import '../../elements/ui-taskbar'
import '../../elements/ui-panel'
import '../../containers/account-widget'
import '../../containers/websocket-status'
import '../../modules/mod-shell'
import { Grid } from '../../assets/svg'

export default function template(this: AppHomeElement): TemplateResult {
  return html`
    ${this.isActionWidgetDisplayed
      ? html`
          <account-widget>Test</account-widget>
        `
      : ``}
    <ui-taskbar>
      <nav>
        <div class="main-area">
          <button @click="${this.displayLauncher}" id="launcher" class="launcher" title="Open Launcher">
            ${Grid('black')}
          </button>
          <div class="logo">
            ${DzintarsDev()}
          </div>
          <ul>
            <li>Home</li>
            <li>Solutions</li>
            <li>Support</li>
            <li>Resources</li>
            <li>About Us</li>
          </ul>
        </div>
        <div class="actions">
          <button class="btn" title="Sign In" @click=${this.toggleAccountWidget}>
            ${Apps()}
          </button>
          <button class="btn" title="Sign In" @click=${this.toggleAccountWidget}>
            ${User()}
          </button>
        </div>
      </nav>
    </ui-taskbar>
    <ui-panel>
      <main>
        <div class="workspace">
          <h1>Main X</h1>
          <a href="/apps">Applications</a>
          ${repeat(
            Object.keys(this.applications),
            key =>
              html`
                <p>${this.applications[key].title}</p>
              `
          )}
        </div>
      </main>
      <footer>
        <websocket-status></websocket-status>
      </footer>
    </ui-panel>
    <mod-shell></mod-shell>
  `
}
