import { put, takeLatest, take, call, delay } from 'redux-saga/effects'
import { LauncherTypes } from './types'
import { LauncherActions } from './actions'
import { websocketSend } from '../websocket'

// function* workerSaga(action: ReturnType<typeof LauncherActions.select>) {
//   yield delay(1000)
//   yield put(websocketSend('LAUNCHER__SELECT', null))
// }

// function* watcherSaga() {
//   yield takeLatest(LauncherTypes.SELECT, workerSaga)
// }

// export default [watcherSaga]
