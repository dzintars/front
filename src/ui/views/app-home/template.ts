import { html, TemplateResult } from 'lit-element'
import { DzintarsDev, User } from '../../assets/svg'

export default function template(): TemplateResult {
  return html`
    <nav>
      <div class="main-area">
        <div class="logo">
          ${DzintarsDev()}
        </div>
      </div>
      <div class="actions-area">
        <button class="btn" title="Sign In">
          ${User()}
        </button>
      </div>
    </nav>
    <slot name="workspace"></slot>
  `
}
