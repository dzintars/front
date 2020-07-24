import { LitElement, customElement, property, TemplateResult, CSSResultArray } from 'lit-element'
// import { connect } from '@captaincodeman/redux-connect-element'
import { connect } from '../../../utils/connect'
import { store, RootState, UiSelectors } from '../../../store'
import template from './template'
import style from './style'
import { Theme } from '../../../assets/style'
// import { NavItemElementData } from '../../components/nav-item'

@customElement('hygen-test')
export class HygenTestElement extends connect(store, LitElement) {
  @property({ type: Boolean }) isVisible: boolean = false
  @property({ type: String }) name: string = 'container'

  // Map state to props (Connect lib)
  mapState(state: RootState) {
    return {
      isVisible: UiSelectors.getLauncherVisibility(state),
    }
  }

  // Intercept custom events from child components and call Redux action (Connect lib)
  mapEvents() {
    return {
      // 'nav-item-click': (e: CustomEvent<NavItemElementData>) => startApplication(e.detail.key),
    }
  }

  onHostClick(): void {
    const event = new CustomEvent('hygen-test-click', {
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
    'hygen-test': HygenTestElement
  }

  interface DocumentEventMap {
    'hygen-test-click': CustomEvent<HygenTestData>
  }
}

export interface HygenTestData {
  isVisible: boolean
  name: string
}
