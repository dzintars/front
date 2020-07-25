import { html, TemplateResult } from 'lit-element'
import { ViewDispatchElement } from './component'
import '../../containers/app-taskbar'
import '../../containers/app-navigation'

export default function template(this: ViewDispatchElement): TemplateResult {
  return html`
    <app-taskbar noshadow></app-taskbar>
    <p>
      Hello from
      <strong>view-dispatch</strong>
      ${this.name}.
    </p>
    <a href="/">Home</a>
    <app-navigation></app-navigation>
  `
}
