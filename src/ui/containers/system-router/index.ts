import UniversalRouter from 'universal-router'
import { LitElement, customElement, html, property, css, PropertyValues } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
// import { connect } from '@captaincodeman/redux-connect-element'
import { connect } from '../../../utils/connect'
import { store, RootState, RoutingSelectors } from '../../../store'
import '../../views/view-error'
import '../../views/view-signin'
import '../../views/view-signup'
import '../app-shell'
// import '../../views/app-home'

@customElement('system-router')
export class SystemRouterElement extends connect(store, LitElement) {
  @property({ type: String }) pathname: string
  @property({ type: String }) view: string

  mapState(state: RootState) {
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
      action: () => `<app-shell noshadow></app-shell>`,
    },
    {
      path: 'dispatch',
      children: [
        {
          path: '/',
          action: () => `<app-home></app-home>`,
        },
        {
          path: '/zones',
          children: [
            {
              path: '/',
              action: () => `<app-users></app-users>`,
            },
            {
              path: '/:id',
              action: () => `<app-users></app-users>`,
            },
          ],
        },
      ],
    },
    {
      path: '/signin',
      action: () => `<view-signin noshadow></view-signin>`,
    },
    {
      path: '/signup',
      action: () => `<view-signup noshadow></view-signup>`,
    },
    {
      path: '/forgot-password',
      action: () => `<app-forgot-password></app-forgot-password>`,
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
