import { AppNavigationElement } from '../../components/app-navigation'
// import { customElement, property } from 'lit-element'
// import { connect } from '@captaincodeman/redux-connect-element'
import { connect } from '../../../utils/connect'
import { store, RootState, ModuleSelectors, getApplications, getModules } from '../../../store'

// @customElement('app-navigation-connected')
export class AppNavigationConnectedElement extends connect(store, AppNavigationElement) {
  // constructor() {
  //   super()
  //   store.dispatch(getApplications())
  //   store.dispatch(getModules())
  // }

  // Map state to props (Connect lib)
  mapState(state: RootState) {
    return {
      modules: ModuleSelectors.selectModulesByApplicationId(state, { applicationId: this.appid }),
    }
  }
}

customElements.define(AppNavigationElement.is, AppNavigationConnectedElement)

// declare global {
//   interface HTMLElementTagNameMap {
//     'app-navigation-connected': AppNavigationConnectedElement
//   }
// }
