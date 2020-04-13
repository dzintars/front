import { LitElement, property, customElement, TemplateResult, CSSResultArray } from 'lit-element'
import { store, RootState, Application, ApplicationSelectors, displayLauncher } from '../../../store'
import { connect } from '../../../utils/connect'
import { Theme } from '../../assets/style'
import template from './template'
import style from './style'

@customElement('app-taskbar')
export class AppTaskbarElement extends connect(store, LitElement) {
  displayLauncher(): void {
    store.dispatch(displayLauncher())
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [Theme, style]
  }
  // Turn off shadowDOM
  createRenderRoot(): Element | ShadowRoot {
    return this.hasAttribute('disable-shadow') ? this : super.createRenderRoot()
  }
}
