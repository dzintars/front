import { html, TemplateResult } from 'lit-element'
import { SystemShellElement } from './component'
import '../../views/app-apps'
import '../../views/app-home'
import '../../views/app-users'
import '../../views/app-signin'
import '../../views/app-signup'
import '../../views/app-forgot-password'
import '../../components/main-launcher'
import '../system-router'

export default function template(this: SystemShellElement): TemplateResult {
  return html`
    ${this.isLauncherVisible
      ? html`
          <main-launcher id="main-launcher"></main-launcher>
        `
      : ``}
    <system-router></system-router>
  `
}
