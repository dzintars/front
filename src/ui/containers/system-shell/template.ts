import { html, TemplateResult } from 'lit-element'
import '../../views/app-apps'
import '../../views/app-home'
import '../../views/app-users'
import '../../views/app-signin'
import '../../views/app-signup'
import '../../views/app-forgot-password'
import '../../components/main-launcher'
import '../system-router'

export default function template(): TemplateResult {
  return html`
    <main-launcher></main-launcher>
    <system-router></system-router>
  `
}
