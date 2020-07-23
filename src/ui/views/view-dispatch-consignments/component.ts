import { LitElement, property, customElement, TemplateResult, CSSResultArray } from 'lit-element'
import { store, connect, RootState, WebsocketSelectors, Application } from '../../../store'
import { Theme } from '../../../assets/style'
import template from './template'
import style from './style'

@customElement('view-dispatch-consignments')
export class ViewDispatchConsignmentsElement extends connect(store, LitElement) {
  // public static styles = [Theme, style]
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
    // console.log(Theme)
    return [Theme, style]
  }
  createRenderRoot(): Element | ShadowRoot {
    return this.hasAttribute('noshadow') ? this : super.createRenderRoot()
  }
}
