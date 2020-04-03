import { LitElement, property, customElement, TemplateResult, CSSResultArray } from 'lit-element'
import { store, RootState, Application, ApplicationSelectors, displayLauncher, getApplications } from '../../../store'
import { connect } from '../../../utils/connect'
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
    return [style]
  }
}
