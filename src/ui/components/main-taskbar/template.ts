import { html, TemplateResult } from 'lit-element'
import { MainTaskbarElement } from './main-taskbar'
import { repeat } from 'lit-html/directives/repeat'

export default function template(this: MainTaskbarElement): TemplateResult {
  return html`
    ${repeat(
      this.applications,
      app => app.uuid,
      app => html`
        <a href=${app.permalink}>${app.title}</a>
      `
    )}
  `
}
