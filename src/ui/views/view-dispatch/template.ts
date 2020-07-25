import { html, TemplateResult } from 'lit-element'
import { ViewDispatchElement } from './component'
import '../../containers/app-taskbar'
import '../../containers/app-navigation-connected'
import '../../components/app-navigation'

export default function template(this: ViewDispatchElement): TemplateResult {
  return html`
    <app-taskbar noshadow></app-taskbar>
    <p>
      Hello from
      <strong>view-dispatch</strong>
      ${this.name}.
    </p>
    <a href="/">Home</a>
    <app-navigation appid="54789c07-bb43-4db4-8b2d-1a8e1f8c67f1" noshadow></app-navigation>
  `
}
