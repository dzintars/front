import { LitElement, customElement, property, TemplateResult } from 'lit-element'
// import { connect } from '@captaincodeman/redux-connect-element'
import { connect } from '../../../utils/connect'
import { EventPathIncludes } from '../../../utils'
import {
  store,
  RootState,
  Application,
  ApplicationSelectors,
  LauncherSelectors,
  toggleLauncher,
  hideLauncher,
  launcherShown,
  launcherHidden,
} from '../../../store'
import template from './template'
import style from './style'

@customElement('main-launcher')
export class MainLauncherElement extends connect(store, LitElement) {
  @property({ type: Boolean, reflect: true }) isVisible: boolean = false
  @property({ type: Object }) wrapperRef: any = this.setWrapperRef.bind(this)
  @property({ type: Array }) applications: Application[]

  public static styles = [style]

  protected render(): TemplateResult {
    return template.call(this)
  }

  mapState(state: RootState) {
    return {
      applications: ApplicationSelectors.applications(state),
      isVisible: LauncherSelectors.getVisibility(state),
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
    store.dispatch(launcherShown())
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

  toggleLauncher(): void {
    store.dispatch(toggleLauncher())
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-launcher': MainLauncherElement
  }
}
