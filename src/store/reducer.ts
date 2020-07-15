import { combineReducers } from 'redux'

// HYGEN.IO: INJECT IMPORT HERE
import websocket, { WebsocketState } from './modules/websocket/reducer'
import route, { RoutingState } from './modules/routing/reducer'
import theme, { ThemeState } from './modules/theme/reducer'
import ui, { UiState } from './modules/ui/reducer'
import users, { UserState } from './modules/users/reducer'
import applications, { ApplicationsState } from './modules/applications/reducer'
import modules, { ModulesState } from './modules/modules/reducer'
import persons, { PersonsState } from './modules/persons/reducer'
import accounts, { AccountsState } from './modules/accounts/reducer'
import organizations, { OrganizationsState } from './modules/organizations/reducer'
import orders, { OrdersState } from './modules/orders/reducer'

export interface RootState {
  // HYGEN.IO: INJECT STATE HERE
  websocket: WebsocketState
  route: RoutingState
  ui: UiState
  theme: ThemeState
  users: UserState
  applications: ApplicationsState
  modules: ModulesState
  persons: PersonsState
  accounts: AccountsState
  organizations: OrganizationsState
  orders: OrdersState
}

export const rootReducer = combineReducers<RootState>({
  // HYGEN.IO: INJECT REDUCER HERE
  websocket,
  route,
  ui,
  theme,
  users,
  applications,
  modules,
  persons,
  accounts,
  organizations,
  orders,
})
