import { html, TemplateResult } from 'lit-element'
import { MainLauncherElement } from './component'
import { repeat } from 'lit-html/directives/repeat'
// import { Icon } from '../../../assets/svg'
import '../../components/nav-item'
import '../../components/nav-item-title'
import '../../components/app-flyout'
// import '../../elements/ui-launcher'
import '../../elements/ui-avatar'

export default function template(this: MainLauncherElement): TemplateResult {
  return html`
    <div class="account">
      <ui-avatar src="src/assets/img/avatars/me-48.png" alt="Dzintars Klavins"></ui-avatar>
      <div class="credentials">
        <p class="username">Guest</p>
        <p class="account-type">Public account</p>
      </div>
      <button class="btn">Sign In</button>
    </div>
    <nav>
      ${repeat(
        this.applications,
        app => app.id,
        app => html`
          <nav-item .key=${app.id} .label=${app.title}>
            <nav-item-title .key=${app.id} .label=${app.title} noshadow></nav-item-title>
            ${app.modules
              ? html`
                  <p>+</p>
                  ${this.activeNavItem === `${app.id}`
                    ? html`
                        <app-flyout .key=${app.id} .modules=${this.modules}></app-flyout>
                      `
                    : html``}
                `
              : html`
                  <p></p>
                `}
          </nav-item>
        `
      )}
    </section>
  `
}
