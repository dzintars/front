import { combineReducers } from 'redux'

// HYGEN.IO: INJECT IMPORT HERE
import websocket from './features/websocket/reducer'
import route from './features/routing/reducer'
import system from './features/system/reducer'
import theme from './features/theme/reducer'
import ui from './features/ui/reducer'
import launcher from './features/launcher/reducer'
import users from './features/users/reducer'
import applications from './features/applications/reducer'
import modules from './features/modules/reducer'
import persons from './features/persons/reducer'
import accounts from './features/accounts/reducer'
import organizations from './features/organizations/reducer'
import orders from './features/orders/reducer'
import appModules from './features/app-navigation/reducer'

export const rootReducer = combineReducers({
  // HYGEN.IO: INJECT REDUCER HERE
  websocket,
  route,
  system,
  ui,
  launcher,
  theme,
  users,
  applications,
  modules,
  persons,
  accounts,
  organizations,
  orders,
  appModules,
})
export type RootState = ReturnType<typeof rootReducer>
