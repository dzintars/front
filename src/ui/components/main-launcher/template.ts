import { html, TemplateResult } from 'lit-element'
import { MainLauncherElement } from './component'
import { repeat } from 'lit-html/directives/repeat'
import { Grid } from '../../assets/svg'

export default function template(this: MainLauncherElement): TemplateResult {
  return html`
    <button @click=${this.onButtonClick} title="Open Launcher">
      ${Grid('black')}
    </button>
    ${repeat(
      this.applications,
      app => app.uuid,
      app => html`
        <a href=${app.permalink}>${app.title}</a>
      `
    )}
  `
}
