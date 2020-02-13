import { put } from 'redux-saga/effects'

import { UserActions } from '../users'
import { fetchApplicationList } from '../applications'

function* homeRoute(params, queries) {
  yield put(fetchApplicationList())
}

function* userListRoute(params, queries) {
  yield put(UserActions.fetchUserList())
}

function* userRoute(params, queries) {
  const { id } = params
  yield put(UserActions.selectUser(parseInt(id)))
}

function* applicationListRoute(params, queries) {
  yield put(fetchApplicationList())
}

export const routes = [
  { path: '/', route: homeRoute },
  { path: '/users', route: userListRoute },
  { path: '/users/:id', route: userRoute },
  { path: '/apps', route: applicationListRoute },
]
