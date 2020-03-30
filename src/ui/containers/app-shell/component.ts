import { LitElement, property, customElement, TemplateResult, CSSResultArray } from 'lit-element'
import { connect } from '../../../utils/connect'
import { store, RootState, Application, ApplicationSelectors, getApplications } from '../../../store'
import template from './template'
import style from './style'

// Purpose of this element is to manage application lifecycle. Start, stop application etc.
// It should not care about what application s requested. It just renders it or put into transition
// state like "starting/loading" etc. As well it could control RBAC.
// User should give an UUID of the rendered app.
@customElement('app-shell')
export class AppShellElement extends connect(store, LitElement) {
  @property({ type: String }) key: string = '9a30119-d673-4978-b393-f608fe28ae07'
  @property({ type: Object }) entities: { [uuid: string]: Application } = {}

  mapState(state: RootState) {
    return {
      entities: ApplicationSelectors.entities(state),
    }
  }

  constructor() {
    super()
    store.dispatch(getApplications())
  }

  // updated() {
  //   console.log(this.entities)
  // }

  connectedCallback(): void {
    super.connectedCallback()
    // console.log('Selected app:', this.entities)
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [style]
  }
}
