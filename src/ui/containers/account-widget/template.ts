import { html, TemplateResult } from 'lit-element'
import '../../components/ui-card'

export default function template(): TemplateResult {
  return html`
    <div>
      <h1>Guest</h1>
    </div>
    <div>
      <ui-card>
        <a href="/signin">SignIn</a>
      </ui-card>
    </div>
  `
}
