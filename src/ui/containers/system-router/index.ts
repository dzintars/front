import UniversalRouter from 'universal-router'
import { LitElement, customElement, html, property, css, PropertyValues } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
// import { connect } from '@captaincodeman/redux-connect-element'
import { connect } from '../../../utils/connect'
import { store, RootState, RoutingSelectors } from '../../../store'

@customElement('system-router')
export class SystemRouterElement extends connect(store, LitElement) {
  @property({ type: String }) pathname: string
  @property({ type: String }) view: string

  mapState(state: RootState): any {
    return {
      pathname: RoutingSelectors.pathname(state),
    }
  }

  constructor() {
    super()
    this.router = new UniversalRouter(this.routes)
  }

  private router: UniversalRouter

  private routes = [
    {
      path: '/',
      action: () => `<app-home><h1 slot="workspace">Home</h1></app-home>`,
    },
    {
      path: '/apps',
      children: [
        {
          path: '',
          action: () => `<app-apps><h1 slot="workspace">Apps</h1></app-apps>`,
        },
        {
          path: '/users',
          children: [
            {
              path: '',
              action: () => `<app-users><view-user-list slot="workspace"></view-user-list></app-users>`,
            },
            {
              path: '/:id',
              action: () => `<app-users><view-user-detail slot="workspace"></view-user-detail></app-users>`,
            },
          ],
        },
      ],
    },
    {
      path: '/signin',
      action: () => `<app-signin><h1 slot="workspace">Signin</h1></app-signin>`,
    },
    {
      path: '/signup',
      action: () => `<app-signup><h1 slot="workspace">Signup</h1></app-signup>`,
    },
    {
      path: '/forgot-password',
      action: () => `<app-forgot-password><h1 slot="workspace">Forgot Password</h1></app-forgot-password>`,
    },
  ]

  createRenderRoot(): this {
    return this
  }

  shouldUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('pathname')) {
      this.router
        .resolve(this.pathname)
        .then(html => (this.view = html))
        .catch(error => (this.view = `<view-error>${error}</view-error>`))
    }
    return changedProperties.has('view')
  }

  render() {
    return html`
      ${unsafeHTML(this.view)}
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `
  }
}
