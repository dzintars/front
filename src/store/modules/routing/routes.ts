import { put } from 'redux-saga/effects'

import { UserActions } from '../users'
import { fetchApplicationList, getApplications } from '../applications'

function* homeRoute(params, queries) {
  // Get list of the applications from the
  yield put(getApplications())
}

function* userListRoute(params, queries) {
  console.log('hit')
  yield put(UserActions.fetchUserList())
}

function* userRoute(params, queries) {
  const { id } = params
  yield put(UserActions.selectUser(parseInt(id)))
}

function* applicationListRoute(params, queries) {
  yield put(getApplications())
}

export const routes = [
  { path: '/', route: homeRoute },
  { path: '/users', route: userListRoute },
  { path: '/users/:id', route: userRoute },
  { path: '/apps', route: applicationListRoute },
]
