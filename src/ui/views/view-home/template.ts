import { html, TemplateResult } from 'lit-element'
import { ViewHomeElement } from './component'

export default function template(this: ViewHomeElement): TemplateResult {
  return html`
    <app-taskbar noshadow></app-taskbar>
    <app-navigation .appid="${this.appid}" noshadow></app-navigation>
  `
}
