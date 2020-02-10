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
      action: () => `<h1>Home</h1>`,
    },
    {
      path: '/apps',
      children: [
        {
          path: '',
          action: () => `<h1>Apps</h1>`,
        },
        {
          path: '/users',
          children: [
            {
              path: '',
              action: () => `<home-app><view-user-list slot="workspace"></view-user-list></home-app>`,
            },
            {
              path: '/applications',
              action: () => `<home-app><h1 slot="workspacex">Applications</h1></home-app>`,
            },
            {
              path: '/:id',
              action: () => `<home-app><view-user-detail slot="workspace"></view-user-detail></home-app>`,
            },
          ],
        },
      ],
    },
    {
      path: '/signin',
      action: () => `<h1>Signin</h1>`,
    },
    {
      path: '/signup',
      action: () => `<h1>Signup</h1>`,
    },
    {
      path: '/restore-password',
      action: () => `<h1>Restore Password</h1>`,
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
