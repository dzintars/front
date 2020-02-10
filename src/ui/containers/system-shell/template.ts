import { html, TemplateResult } from 'lit-element'
import '../../views/app-home'
import '../../views/app-signup'
import '../system-router'

export default function template(): TemplateResult {
  return html`
    <system-router></system-router>
  `
}
