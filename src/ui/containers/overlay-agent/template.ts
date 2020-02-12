import { html, TemplateResult } from 'lit-element'
import '../../views/app-apps'
import '../../views/app-home'
import '../../views/app-users'
import '../../views/app-signin'
import '../../views/app-signup'
import '../../views/app-forgot-password'
import '../system-router'

export default function template(): TemplateResult {
  return html`
    <slot name="launcher"></slot>
    <slot name="popup"></slot>
    <slot name="dialog"></slot>
  `
}
