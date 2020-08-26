import { put, takeLatest, take, call, delay } from 'redux-saga/effects'
import { LauncherTypes } from './types'
import { LauncherActions } from './actions'
import { websocketSend } from '../websocket'

function* workerSaga(action) {
  // const { id } = action.payload.appid
  console.log('Launcher worker hit:', action.payload)
  // yield put({ ...action, type: `REMOTE_${action.type}` })
  // TODO: No no!
  // yield delay(1000)
  yield put(websocketSend('APPLICATION__LIST_APPLICATIONS_REQUEST', {}))
}

function* watcherSaga() {
  yield takeLatest(LauncherTypes.DISPLAY, workerSaga)
}

export default [watcherSaga]
