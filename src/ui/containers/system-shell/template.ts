import { html, TemplateResult } from 'lit-element'
import '../../components/main-taskbar'
import '../app-router/app-router'

export default function template(): TemplateResult {
  return html`
    <main-taskbar></main-taskbar>
    <app-router></app-router>
  `
}
