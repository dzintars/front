import { combineReducers } from 'redux'

// HYGEN.IO: INJECT IMPORT HERE
import route, { RoutingState } from './modules/routing/reducer'
import launcher, { LauncherState } from './modules/launcher/reducer'
import users, { UserState } from './modules/users/reducer'
import applications from './modules/applications/reducer'
import { ApplicationsState } from './modules/applications/models'
import persons from './modules/persons/reducer'
import { PersonsState } from './modules/persons/models'
import accounts from './modules/accounts/reducer'
import { AccountsState } from './modules/accounts/models'

export interface RootState {
  // HYGEN.IO: INJECT STATE HERE
  route: RoutingState
  launcher: LauncherState
  users: UserState
  applications: ApplicationsState
  persons: PersonsState
  accounts: AccountsState
}

export const rootReducer = combineReducers<RootState>({
  // HYGEN.IO: INJECT REDUCER HERE
  route,
  launcher,
  users,
  applications,
  persons,
  accounts,
})
