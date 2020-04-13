import { html, TemplateResult } from 'lit-element'
import { MainTaskbarElement } from './component'
import { repeat } from 'lit-html/directives/repeat'
import { User, Apps, Grid } from '../../assets/svg'
import '../../elements/ui-taskbar'

export default function template(this: MainTaskbarElement): TemplateResult {
  return html`
    <ui-taskbar>
      <nav>
        <div class="main-area">
          <button @click="${this.displayLauncher}" id="launcher" class="launcher" title="Open Launcher">
            ${Grid('black')}
          </button>
          <ul>
            <li>Home</li>
            <li>Solutions</li>
            <li>Support</li>
            <li>Resources</li>
            <li>About Us</li>
          </ul>
        </div>
        <div class="actions">
          <button class="btn" title="Applications" @click=${this.toggleAccountWidget}>
            ${Apps()}
          </button>
          <button class="btn" title="Sign In" @click=${this.toggleAccountWidget}>
            ${User()}
          </button>
        </div>
      </nav>
    </ui-taskbar>
    <button @click="${this.displayLauncher}" id="launcher" class="launcher" title="Open Launcher">
      ${Grid('black')}
    </button>
    <ul>
      ${repeat(
        this.applications,
        app => app.uuid,
        app => html`
          <li><a href=${app.permalink}>${app.title}</a></li>
        `
      )}
    </ul>
  `
}
