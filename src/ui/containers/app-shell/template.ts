import { html, TemplateResult } from 'lit-element'
import { AppShellElement } from './component'
import '../../containers/app-taskbar'
import '../../components/app-shortcuts'
import '../../components/action-center'
import '../../views/app-home'
import '../../containers/ui-statusbar-connected'

export default function template(this: AppShellElement): TemplateResult {
  return html`
    <app-taskbar noshadow></app-taskbar>
    <main>
      <app-shortcuts></app-shortcuts>
      <app-home .applications=${this.entities}></app-home>
      ${this.isActionCenterDisplayed
        ? html`
            <action-center></action-center>
          `
        : html``}
    </main>
    <ui-statusbar-connected></ui-statusbar-connected>
  `
}
