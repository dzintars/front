import { html, TemplateResult } from 'lit-element'
import '../../components/main-taskbar'
import '../app-router/app-router'

export default function template(): TemplateResult {
  return html`
    <main-taskbar></main-taskbar>
    <a href="/">home</a>
    <a href="/users">users</a>
    <a href="/users/1">1</a>
    <a href="/users/2">2</a>
    <a href="/users/3">3</a>
    <a href="/applications">Applications</a>
    <app-router></app-router>
  `
}
