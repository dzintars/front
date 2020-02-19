import { html, TemplateResult } from 'lit-element'
import { MainLauncherElement } from './component'
import { repeat } from 'lit-html/directives/repeat'
import { Grid } from '../../assets/svg'
import '../../components/application-shortcut'
import '../../components/ui-launcher'

export default function template(this: MainLauncherElement): TemplateResult {
  return html`
    <ui-launcher>
      <nav slot="main">
        <button @click=${this.toggleLauncher} title="Open Launcher">
          ${Grid('black')}
        </button>
      </nav>
      <section slot="main">
        ${repeat(
          this.applications,
          app => app.uuid,
          app => html`
            <application-shortcut slot="main" .key=${app.permalink} .title=${app.title}></application-shortcut>
          `
        )}
      </section>
    </ui-launcher>
  `
}
