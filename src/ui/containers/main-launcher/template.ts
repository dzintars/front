import { html, TemplateResult } from 'lit-element'
import { MainLauncherElement } from './component'
import { repeat } from 'lit-html/directives/repeat'
import { Grid } from '../../assets/svg'
import '../../components/application-shortcut'
// import '../../elements/ui-launcher'

export default function template(this: MainLauncherElement): TemplateResult {
  return html`
    <nav slot="main">
      <!-- <button @click=${this.hideLauncher} title="Open Launcher">
          ${Grid('black')}
        </button> -->
    </nav>
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
