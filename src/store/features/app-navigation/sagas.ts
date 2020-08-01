import { put, takeLatest, take, call, delay } from 'redux-saga/effects'
import { AppNavigationTypes } from './constants'
import { ModxActions } from './actions'
import { websocketSend } from '../websocket'

function* workerSaga(action) {
  const { id } = action.payload.appid
  console.log('Worker hit', action.payload.appid)
  // yield put({ ...action, type: `REMOTE_${action.type}` })
  // TODO: No no!
  // yield delay(1000)
  yield put(websocketSend('APP_NAVIGATION__LIST_MODULES_REQUEST', { id: action.payload.appid }))
}

function* watcherSaga() {
  yield takeLatest(AppNavigationTypes.LOADED, workerSaga)
}

export default [watcherSaga]
