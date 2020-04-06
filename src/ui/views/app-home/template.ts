import { html, TemplateResult } from 'lit-element'
import { AppHomeElement } from './component'
import '../../containers/ui-statusbar-connected'

export default function template(this: AppHomeElement): TemplateResult {
  return html`
    <main></main>
    <ui-statusbar-connected></ui-statusbar-connected>
  `
}
