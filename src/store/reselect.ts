import { Store } from 'redux'
import * as ReselectTools from 'reselect-tools'

// HYGEN.IO: INJECT IMPORT HERE
import { WebsocketSelectors } from './modules/websocket'
import { RoutingSelectors } from './modules/routing'
import { UiSelectors } from './modules/ui'
import { UserSelectors } from './modules/users'
import { ApplicationSelectors } from './modules/applications'
import { OrganizationSelectors } from './modules/organizations'

export const startReselect = (store: Store) => {
  ReselectTools.getStateWith(() => store.getState())
  // HYGEN.IO: INJECT SELECTORS HERE
  ReselectTools.registerSelectors(WebsocketSelectors)
  ReselectTools.registerSelectors(RoutingSelectors)
  ReselectTools.registerSelectors(UiSelectors)
  ReselectTools.registerSelectors(UserSelectors)
  ReselectTools.registerSelectors(ApplicationSelectors)
  ReselectTools.registerSelectors(OrganizationSelectors)
}
