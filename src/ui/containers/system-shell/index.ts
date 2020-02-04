import {
  LitElement,
  customElement,
  html,
  css,
  TemplateResult,
  CSSResult,
} from 'lit-element';
import '../app-router/app-router';
// import '../../components/main-taskbar'

@customElement('system-shell')
export class AppShellElement extends LitElement {
  render(): TemplateResult {
    return html`
      <a href="/">home</a>
      <a href="/users">users</a>
      <a href="/users/1">1</a>
      <a href="/users/2">2</a>
      <a href="/users/3">3</a>
      <a href="/applications">Applications</a>
      <app-router></app-router>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
      }

      app-router {
        display: block;
      }
    `;
  }
}
