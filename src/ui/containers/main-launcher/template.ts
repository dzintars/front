import { html, TemplateResult } from 'lit-element'
import { MainLauncherElement } from './component'
import { repeat } from 'lit-html/directives/repeat'
import { Grid } from '../../assets/svg'
import '../../components/application-shortcut'
// import '../../elements/ui-launcher'
import '../../elements/ui-avatar'

export default function template(this: MainLauncherElement): TemplateResult {
  return html`
    <nav slot="main">
      <!-- <button @click=${this.hideLauncher} title="Open Launcher">
          ${Grid('black')}
        </button> -->
    </nav>
    <div class="account">
      <ui-avatar src="src/ui/assets/img/avatars/me-48.png" alt="Dzintars Klavins"></ui-avatar>
      <div class="credentials">
        <p class="username">Guest</p>
        <p class="account-type">Public account</p>
      </div>
      <button class="primary xs">Sign In</button>
    </div>
    <section>
      ${repeat(
        this.applications,
        app => app.uuid,
        app => html`
          <application-shortcut .key=${app.uuid} .title=${app.title}></application-shortcut>
        `
      )}
    </section>
  `
}
