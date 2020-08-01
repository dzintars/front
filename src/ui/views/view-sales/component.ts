import { LitElement, customElement, property, TemplateResult, CSSResultArray } from 'lit-element'
import { ViewBaseElement } from '../view-base'
import { connect } from '../../../utils/connect'
import { store, RootState, ModuleSelectors, getApplications, getModules, startApplication } from '../../../store'
import template from './template'
import style from './style'

@customElement('view-sales')
export class ViewSalesElement extends connect(store, ViewBaseElement) {
  @property({ type: String }) appid: string = 'c178025e-a209-4c50-8c34-36d35f36494c'

  connectedCallback(): void {
    super.connectedCallback()
    store.dispatch(startApplication(this.appid))
    // store.dispatch(getApplications())
    // store.dispatch(getModules())
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  static get styles(): CSSResultArray {
    return [style]
  }

  createRenderRoot(): Element | ShadowRoot {
    return this.hasAttribute('noshadow') ? this : super.createRenderRoot()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'view-sales': ViewSalesElement
  }
}
