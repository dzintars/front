import { LitElement, property, customElement, TemplateResult, CSSResultArray } from 'lit-element'
import { store, connect, RootState, WebsocketSelectors, Application } from '../../../store'
import template from './template'
import style from './style'

@customElement('app-home')
export class AppHomeElement extends connect(store, LitElement) {
  @property({ type: String }) websocketState: string = WebsocketSelectors.state.toString()
  @property({ type: Object }) applications: { [uuid: string]: Application } = {}

  mapState(state: RootState) {
    return {
      websocketState: WebsocketSelectors.state(state),
    }
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [style]
  }
}
