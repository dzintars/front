import { put, takeLatest, take, call, delay } from 'redux-saga/effects'
import { AppNavigationTypes } from './constants'
import { ModxActions } from './actions'
import { websocketSend } from '../websocket'

function* workerSaga() {
  // console.log('Worker hit', action)
  // yield put({ ...action, type: `REMOTE_${action.type}` })
  // TODO: No no!
  yield delay(1000)
  yield put(
    websocketSend('APP_NAVIGATION__LIST_MODULES_REQUEST', {
      payload: {
        id: '54789c07-bb43-4db4-8b2d-1a8e1f8c67f1',
      },
    })
  )
}

function* watcherSaga() {
  yield takeLatest(AppNavigationTypes.LOADED, workerSaga)
}

export default [watcherSaga]
