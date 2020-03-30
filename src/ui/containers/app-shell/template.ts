import { html, TemplateResult } from 'lit-element'
import '../../views/app-home'
// import '../../views/app-signin'
import { AppShellElement } from './component'

export default function template(this: AppShellElement): TemplateResult {
  return html`
    <app-home .applications=${this.entities}></app-home>
  `
}
