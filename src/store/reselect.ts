import { Store } from 'redux'
import * as ReselectTools from 'reselect-tools'

// HYGEN.IO: INJECT IMPORT HERE
import { RoutingSelectors } from './modules/routing'
import { LauncherSelectors } from './modules/launcher'
import { UserSelectors } from './modules/users'
import { ApplicationSelectors } from './modules/applications'
import { OrganizationSelectors } from './modules/organizations'

export const startReselect = (store: Store) => {
  ReselectTools.getStateWith(() => store.getState())
  // HYGEN.IO: INJECT SELECTORS HERE
  ReselectTools.registerSelectors(RoutingSelectors)
  ReselectTools.registerSelectors(LauncherSelectors)
  ReselectTools.registerSelectors(UserSelectors)
  ReselectTools.registerSelectors(ApplicationSelectors)
  ReselectTools.registerSelectors(OrganizationSelectors)
}
