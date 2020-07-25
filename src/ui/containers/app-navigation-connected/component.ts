import { AppNavigationElement } from '../../components/app-navigation'
// import { customElement, property } from 'lit-element'
// import { connect } from '@captaincodeman/redux-connect-element'
import { connect } from '../../../utils/connect'
import { store, RootState, ModuleSelectors, RoutingSelectors } from '../../../store'

// @customElement('app-navigation-connected')
export class AppNavigationConnectedElement extends connect(store, AppNavigationElement) {
  // Map state to props (Connect lib)
  mapState(state: RootState) {
    return {
      pathname: RoutingSelectors.pathname(state),
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
