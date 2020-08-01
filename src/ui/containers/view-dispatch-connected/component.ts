import { ViewDispatchElement } from '../../views/view-dispatch'
import { connect } from '../../../utils/connect'
import { store, RootState, startApplication } from '../../../store'

export class ViewDispatchConnectedElement extends connect(store, ViewDispatchElement) {
  connectedCallback() {
    super.connectedCallback()
    store.dispatch(startApplication(this.appid))
    // store.dispatch(getApplications())
    // store.dispatch(getModules())
  }

  // Map state to props (Connect lib)
  // mapState(state: RootState) {
  //   return {

  //   }
  // }
}

customElements.define(ViewDispatchElement.is, ViewDispatchConnectedElement)
