import { html, TemplateResult } from 'lit-element'
import { MainLauncherElement } from './component'
import { repeat } from 'lit-html/directives/repeat'
import { Grid } from '../../assets/svg'
import '../application-shortcut'

export default function template(this: MainLauncherElement): TemplateResult {
  return html`
    <button @click=${this.toggleLauncher} title="Open Launcher">
      ${Grid('black')}
    </button>
    ${repeat(
      this.applications,
      app => app.uuid,
      app => html`
        <application-shortcut .key=${app.permalink} .title=${app.title}></application-shortcut>
      `
    )}
  `
}
