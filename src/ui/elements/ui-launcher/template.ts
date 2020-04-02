import { html, TemplateResult } from 'lit-element'
import { UiLauncherElement } from './component'
import '../../components/application-shortcut'

export default function template(this: UiLauncherElement): TemplateResult {
  return html`
    <slot name="main"></slot>
  `
}