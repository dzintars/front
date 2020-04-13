import { LitElement, customElement, property, TemplateResult, CSSResultArray } from 'lit-element'
// import { connect } from '@captaincodeman/redux-connect-element'
import { connect } from '../../../utils/connect'
import { EventPathIncludes } from '../../../utils'
import {
  store,
  RootState,
  RoutingActions,
  Application,
  ApplicationSelectors,
  UiSelectors,
  hideLauncher,
  launcherDisplayed,
  launcherHidden,
  startApplication,
  selectApplication,
} from '../../../store'
import { Theme } from '../../assets/style'
import template from './template'
import style from './style'

@customElement('main-launcher')
export class MainLauncherElement extends connect(store, LitElement) {
  @property({ type: Boolean, reflect: true }) isVisible: boolean = false
  @property({ type: Object }) wrapperRef: any = this.setWrapperRef.bind(this)
  @property({ type: Array }) applications: Application[]

  mapState(state: RootState) {
    return {
      applications: ApplicationSelectors.applications(state),
      isVisible: UiSelectors.getLauncherVisibility(state),
    }
  }

  // Intercept custom events from child components and call Redux action (Connect lib)
  mapEvents() {
    return {
      'application-shortcut-click': (e: CustomEvent) => startApplication(e.detail.key),
      // 'application-shortcut-click': (e: CustomEvent) => RoutingActions.push(e.detail.key),
    }
  }

  constructor() {
    super()
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  onButtonClick(): void {
    const event = new CustomEvent('launcher-click', {
      bubbles: true,
      composed: true,
      detail: {},
    })
    this.dispatchEvent(event)
  }

  changeState() {
    store.dispatch(hideLauncher())
  }

  connectedCallback(): void {
    super.connectedCallback()
    document.addEventListener('mousedown', this.handleClickOutside)
    store.dispatch(launcherDisplayed())
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    document.removeEventListener('mousedown', this.handleClickOutside)
    store.dispatch(launcherHidden())
  }

  setWrapperRef(node): void {
    this.wrapperRef = node
  }

  handleClickOutside(e: Event): void {
    if (this.getRootNode().contains(this) && !e.composedPath().includes(this) && !EventPathIncludes(e, '#launcher')) {
      store.dispatch(hideLauncher())
    }
  }

  hideLauncher(): void {
    store.dispatch(hideLauncher())
  }

  sendWs(): void {
    store.dispatch(selectApplication('10578886-1033-4d2c-a8df-65452c62573b'))
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [Theme, style]
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-launcher': MainLauncherElement
  }
}
