import { LitElement, customElement, property, TemplateResult } from 'lit-element'
import { connect } from '../../../utils/connect'
import { store, RootState, ModuleSelectors, getApplications, getModules } from '../../../store'
import template from './template'
import style from './style'
import { ViewBaseElement } from '../view-base'

@customElement('view-dispatch')
export class ViewDispatchElement extends connect(store, ViewBaseElement) {
  public static styles = [style]
  @property({ type: Boolean, reflect: true }) selected: boolean = false
  @property({ type: Number }) key: number = 0
  @property({ type: String }) name: string = 'view'

  constructor() {
    super()
    store.dispatch(getApplications())
    store.dispatch(getModules())
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  // createRenderRoot(): Element | ShadowRoot {
  //   return this.hasAttribute('noshadow') ? this : super.createRenderRoot()
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'view-dispatch': ViewDispatchElement
  }
}

export interface ComponentData {
  key: number
  name: string
}
