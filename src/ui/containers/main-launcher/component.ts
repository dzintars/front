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
  Module,
  UiSelectors,
  hideLauncher,
  launcherDisplayed,
  launcherHidden,
  startApplication,
  selectApplication,
} from '../../../store'
import { Theme } from '../../../assets/style'
import template from './template'
import style from './style'
import { NavItemElementData } from '../../components/nav-item'

@customElement('main-launcher')
export class MainLauncherElement extends connect(store, LitElement) {
  @property({ type: Boolean, reflect: true }) isVisible: boolean = false
  @property({ type: Object }) wrapperRef: any = this.setWrapperRef.bind(this)
  @property({ type: Array }) applications: Application[]
  @property({ type: String }) activeNavItem: string = ''
  @property({ type: Array }) modules: Module[] = [{ id: '1', title: 'test' }]
  @property({ type: String }) activeView: string = ''

  mapState(state: RootState) {
    return {
      applications: ApplicationSelectors.selectAllApplicationsArray(state),
      isVisible: UiSelectors.getLauncherVisibility(state),
    }
  }

  // Intercept custom events from child components and call Redux action (Connect lib)
  mapEvents() {
    return {
      'nav-item-click': (e: CustomEvent<NavItemElementData>) => startApplication(e.detail.key),
      // 'application-shortcut-click': (e: CustomEvent) => RoutingActions.push(e.detail.key),
    }
  }

  constructor() {
    super()
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.addEventListener('nav-item-enter', e => {
      this.openFlyoutMenu(e)
    })
    this.addEventListener('nav-item-leave', e => {
      this.hideFlyoutMenu(e)
    })
    this.addEventListener('sign-up-click', e => {
      this.activeView = 'signup'
    })
    this.addEventListener('sign-in-click', e => {
      this.activeView = 'signin'
    })
  }

  openFlyoutMenu(e) {
    this.activeNavItem = e.detail.key
  }

  hideFlyoutMenu(e) {
    this.activeNavItem = ''
  }

  onButtonClick(): void {
    const event = new CustomEvent('launcher-click', {
      bubbles: true,
      composed: true,
      detail: {},
    })
    this.dispatchEvent(event)
  }

  onSignIn(): void {
    const evt = new CustomEvent('sign-in-click', {
      bubbles: true,
      composed: true,
    })
    this.dispatchEvent(evt)
  }

  changeState(): void {
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

  createRenderRoot(): Element | ShadowRoot {
    return this.hasAttribute('noshadow') ? this : super.createRenderRoot()
  }
}

declare global {
  interface DocumentEventMap {
    'sign-in-click': CustomEvent<MainLauncherData>
  }

  interface HTMLElementTagNameMap {
    'main-launcher': MainLauncherElement
  }
}

export interface MainLauncherData {
  key: number
  name: string
}
