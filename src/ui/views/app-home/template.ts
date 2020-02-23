import { html, TemplateResult } from 'lit-element'
import { AppHomeElement } from './component'
import { DzintarsDev, User, Apps } from '../../assets/svg'
import '../../containers/account-widget'

export default function template(this: AppHomeElement): TemplateResult {
  return html`
    ${this.isActionWidgetDisplayed
      ? html`
          <account-widget>Test</account-widget>
        `
      : ``}
    <nav>
      <div class="main-area">
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
    <main>
      <div class="workspace">
        <h1>Home</h1>
        <a href="/apps">Applications</a>
      </div>
    </main>
  `
}
