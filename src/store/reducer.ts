import { combineReducers } from 'redux'

// HYGEN.IO: INJECT IMPORT HERE
import route, { RoutingState } from './modules/routing/reducer'
import users, { UserState } from './modules/users/reducer'
import applications, { ApplicationState } from './modules/applications/reducer'

export interface RootState {
  // HYGEN.IO: INJECT STATE HERE
  route: RoutingState
  users: UserState
  applications: ApplicationState
}

export const rootReducer = combineReducers({
  // HYGEN.IO: INJECT REDUCER HERE
  route,
  users,
  applications,
})
