import { html, TemplateResult } from 'lit-element'
import { ActionCenterElement } from './component'

export default function template(this: ActionCenterElement): TemplateResult {
  return html`
    <header>Action Center</header>
    <main>
      <nav></nav>
    </main>
    <footer>
      <p>Sign Out</p>
    </footer>
  `
}
