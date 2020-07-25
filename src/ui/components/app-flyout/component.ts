import { LitElement, customElement, property, TemplateResult, CSSResultArray } from 'lit-element'
import { store, RootState, Module, ModuleSelectors, ApplicationSelectors, Application } from '../../../store'
import { connect } from '../../../utils/connect'
import template from './template'
import style from './style'

@customElement('app-flyout')
export class AppFlyoutElement extends connect(store, LitElement) {
  @property({ type: String }) key: string = ''
  @property({ type: String }) label: string = 'Unspecified label'
  @property({ type: Array }) modules: Module[] = [{ id: '1', title: 'Flyout' }]

  // mapState(state: RootState) {
  //   return {
  //     modules: ModuleSelectors.selectModulesByApplicationId(state, { applicationId: this.key }),
  //   }
  // }

  onHostClick(): void {
    const evt = new CustomEvent('application-shortcut-click', {
      bubbles: true,
      composed: true,
      detail: {
        key: this.key,
        label: this.label,
      },
    })
    this.dispatchEvent(evt)
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.addEventListener('click', this.onHostClick)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.removeEventListener('click', this.onHostClick)
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [style]
  }

  createRenderRoot(): Element | ShadowRoot {
    return this.hasAttribute('noshadow') ? this : super.createRenderRoot()
  }
}

declare global {
  interface DocumentEventMap {
    'app-flyout-click': CustomEvent<AppFlyoutData>
  }

  interface HTMLElementTagNameMap {
    'app-flyout': AppFlyoutElement
  }
}

export interface AppFlyoutData {
  key: number
  name: string
}
