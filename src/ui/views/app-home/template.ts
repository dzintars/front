import { html, TemplateResult } from 'lit-element'
import { DzintarsDev, User } from '../../assets/svg'

export default function template(): TemplateResult {
  return html`
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
      <div class="actions-area">
        <button class="btn" title="Sign In">
          ${User()}
        </button>
      </div>
    </nav>
    <main>
      <h1>Home</h1>
      <a href="/apps">Applications</a>
    </main>
  `
}
