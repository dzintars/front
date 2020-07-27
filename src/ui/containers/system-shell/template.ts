import { html, TemplateResult } from 'lit-element'
import { SystemShellElement } from './component'
import '../../containers/main-launcher'
import '../system-router'

export default function template(this: SystemShellElement): TemplateResult {
  return html`
    <system-router></system-router>
  `
}
