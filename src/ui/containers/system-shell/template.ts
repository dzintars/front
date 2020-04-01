import { html, TemplateResult } from 'lit-element'
import { SystemShellElement } from './component'
import '../../containers/main-launcher'
import '../../containers/app-shell'
// import '../../views/app-apps'
// import '../../views/app-home'
// import '../../views/app-users'
// import '../../views/app-signin'
// import '../../views/app-signup'
// import '../../views/app-forgot-password'
// import '../system-router'

export default function template(this: SystemShellElement): TemplateResult {
  switch (this.websocketState) {
    case 'WEBSOCKET_CONNECTING':
      return html`
        <div style="background-color: orange;"><p style="color: white;">Connecting...</p></div>
      `
    case 'WEBSOCKET_CONNECTED':
      return html`
        ${this.isLauncherVisible
          ? html`
              <main-launcher id="main-launcher"></main-launcher>
            `
          : ``}
        <app-shell></app-shell>
      `
    default:
      return html`
        <div style="background-color: red;"><p style="color: white;">Disconnected</p></div>
      `
  }
}
