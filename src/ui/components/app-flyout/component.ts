import { LitElement, customElement, property, TemplateResult, CSSResultArray } from 'lit-element'
import { store, RootState, Module, ModuleSelectors, ApplicationSelectors, Application } from '../../../store'
import { connect } from '../../../utils/connect'
import template from './template'
import style from './style'

@customElement('app-flyout')
export class AppFlyoutElement extends connect(store, LitElement) {
  @property({ type: String }) key: string = ''
  @property({ type: String }) label: string = 'Unspecified label'
  @property({ type: Array }) moduleIds: string[] = ['']
  @property({ type: Array }) allModules: Module[] = [{ id: '', title: '' }]
  @property({ type: Array }) modules: Module[] = [{ id: '', title: '' }]

  mapState(state: RootState) {
    return {
      moduleIds: ApplicationSelectors.selectApplicationModules(state, {
        applicationId: this.key,
      }),
      allModules: ModuleSelectors.selectAllModulesArray(state),
      modules: ModuleSelectors.selectModulesByApplicationId(state, { applicationId: this.key }),
    }
  }

  // updated(): void {
  //   this.modules = (): Module[] => this.moduleIds.map(id => this.allModules[id]).sort()
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
    console.log(this.modules)
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
