import { LitElement, customElement, property, TemplateResult, CSSResultArray } from 'lit-element'
// import { connect } from '@captaincodeman/redux-connect-element'
import { connect } from '../../../utils/connect'
import { store, RootState, Module, ModuleSelectors } from '../../../store'
import template from './template'
import style from './style'
import { Theme } from '../../../assets/style'
// import { NavItemElementData } from '../../components/nav-item'

@customElement('app-navigation')
export class AppNavigationElement extends connect(store, LitElement) {
  @property({ type: String }) appid: string = '54789c07-bb43-4db4-8b2d-1a8e1f8c67f1'
  @property({ type: Array }) modules: Module[] = [{ id: '', title: '' }]
  @property({ type: String }) name: string = 'container'

  // Map state to props (Connect lib)
  mapState(state: RootState) {
    return {
      modules: ModuleSelectors.selectModulesByApplicationId(state, { applicationId: this.appid }),
    }
  }

  // Intercept custom events from child components and call Redux action (Connect lib)
  mapEvents() {
    return {
      // 'nav-item-click': (e: CustomEvent<NavItemElementData>) => startApplication(e.detail.key),
    }
  }

  onHostClick(): void {
    const event = new CustomEvent('app-navigation-click', {
      bubbles: true,
      composed: true,
      detail: {},
    })
    this.dispatchEvent(event)
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
  interface HTMLElementTagNameMap {
    'app-navigation': AppNavigationElement
  }

  interface DocumentEventMap {
    'app-navigation-click': CustomEvent<AppNavigationData>
  }
}

export interface AppNavigationData {
  appid: string
  name: string
}
