// import { customElement, property } from 'lit-element'
import { AppNavigationElement } from '../../components/app-navigation'
import { connect } from '../../../utils/connect'
import {
  store,
  RootState,
  ApplicationSelectors,
  ModuleSelectors,
  AppNavigationSelectors,
  RoutingSelectors,
  AppNavigationActions,
} from '../../../store'

// @customElement('app-navigation-connected')
export class AppNavigationConnectedElement extends connect(store, AppNavigationElement) {
  connectedCallback() {
    super.connectedCallback()
    store.dispatch(AppNavigationActions.loaded())
  }

  // Map state to props (Connect lib)
  mapState(state: RootState) {
    return {
      pathname: RoutingSelectors.pathname(state),
      isApplicationsFetching: ApplicationSelectors.selectFetchState(state),
      isModulesFetching: ModuleSelectors.selectFetchState(state),
      modules: AppNavigationSelectors.selectAllModulesArray(state),
    }
  }
}

customElements.define(AppNavigationElement.is, AppNavigationConnectedElement)

// declare global {
//   interface HTMLElementTagNameMap {
//     'app-navigation-connected': AppNavigationConnectedElement
//   }
// }
