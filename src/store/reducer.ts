import { combineReducers } from 'redux'

// HYGEN.IO: INJECT IMPORT HERE
import route, { RoutingState } from './modules/routing/reducer'
import launcher, { LauncherState } from './modules/launcher/reducer'
import users, { UserState } from './modules/users/reducer'
import applications, { ApplicationsState } from './modules/applications/reducer'
import persons, { PersonsState } from './modules/persons/reducer'
import accounts, { AccountsState } from './modules/accounts/reducer'
import organizations, { OrganizationsState } from './modules/organizations/reducer'

export interface RootState {
  // HYGEN.IO: INJECT STATE HERE
  route: RoutingState
  launcher: LauncherState
  users: UserState
  applications: ApplicationsState
  persons: PersonsState
  accounts: AccountsState
  organizations: OrganizationsState
}

export const rootReducer = combineReducers<RootState>({
  // HYGEN.IO: INJECT REDUCER HERE
  route,
  launcher,
  users,
  applications,
  persons,
  accounts,
  organizations,
})
