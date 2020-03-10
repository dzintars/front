import { html, TemplateResult } from 'lit-element'
import { MainTaskbarElement } from './component'
import { repeat } from 'lit-html/directives/repeat'
import { Grid } from '../../assets/svg'

export default function template(this: MainTaskbarElement): TemplateResult {
  return html`
    <button @click="${this.displayLauncher}" id="launcher" class="launcher" title="Open Launcher">
      ${Grid('black')}
    </button>
    <ul>
      ${repeat(
        this.applications,
        app => app.uuid,
        app => html`
          <li><a href=${app.permalink}>${app.title}</a></li>
        `
      )}
    </ul>
  `
}
