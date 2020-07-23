import { html, TemplateResult } from 'lit-element'
import { AppShellElement } from './component'
import '../../containers/app-taskbar'
import '../../components/app-shortcuts'
import '../../components/action-center'
// import '../../views/app-home'/
import '../../containers/ui-statusbar-connected'
import '../../containers/users-router'

export default function template(this: AppShellElement): TemplateResult {
  return html`
    <app-taskbar noshadow></app-taskbar>
    <main>
      <app-shortcuts noshadow></app-shortcuts>
      <app-home .applications=${this.entities} noshadow></app-home>
      <!-- <users-router></users-router> -->
      ${this.isActionCenterDisplayed
        ? html`
            <action-center noshadow></action-center>
          `
        : html``}
    </main>
    <ui-statusbar-connected></ui-statusbar-connected>
  `
}
