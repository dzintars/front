import { html, TemplateResult } from 'lit-element'
import '../../views/home-app'
import '../system-router'

export default function template(): TemplateResult {
  return html`
    <system-router></system-router>
  `
}
