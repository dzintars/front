import { customElement, TemplateResult, CSSResultArray, property } from 'lit-element'
import { ViewBaseElement } from '../view-base'
import { connect } from '../../../utils/connect'
import { store, RootState, ModuleSelectors, getApplications, getModules, startApplication } from '../../../store'
import template from './template'
import style from './style'

@customElement('view-dispatch')
export class ViewDispatchElement extends connect(store, ViewBaseElement) {
  @property({ type: String }) appid: string = '54789c07-bb43-4db4-8b2d-1a8e1f8c67f1'

  connectedCallback(): void {
    super.connectedCallback()
    // store.dispatch(startApplication(this.appid))
    // store.dispatch(getApplications())
    // store.dispatch(getModules())
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [style]
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'view-dispatch': ViewDispatchElement
  }
}
