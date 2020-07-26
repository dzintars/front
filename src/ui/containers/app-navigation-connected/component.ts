// import { customElement, property } from 'lit-element'
import { AppNavigationElement } from '../../components/app-navigation'
import { connect } from '../../../utils/connect'
import { store, RootState, ApplicationSelectors, ModuleSelectors, RoutingSelectors } from '../../../store'

// @customElement('app-navigation-connected')
export class AppNavigationConnectedElement extends connect(store, AppNavigationElement) {
  // Map state to props (Connect lib)
  mapState(state: RootState) {
    return {
      pathname: RoutingSelectors.pathname(state),
      isApplicationsFetching: ApplicationSelectors.selectFetchState(state),
      isModulesFetching: ModuleSelectors.selectFetchState(state),
      modules:
        this.isApplicationsFetching && this.isModulesFetching
          ? ``
          : ModuleSelectors.selectModulesByApplicationId(state, { applicationId: this.appid }),
    }
  }
}

customElements.define(AppNavigationElement.is, AppNavigationConnectedElement)

// declare global {
//   interface HTMLElementTagNameMap {
//     'app-navigation-connected': AppNavigationConnectedElement
//   }
// }
