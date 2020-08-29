import { put, takeLatest, take, call, delay } from 'redux-saga/effects'
import { AppNavigationTypes } from './constants'
import { ModxActions } from './actions'
import { WebsocketActions } from '../websocket'

function* workerSaga(action) {
  // const { id } = action.payload.appid
  // console.log('Worker hit', action.payload.appid)
  // yield put({ ...action, type: `REMOTE_${action.type}` })
  // TODO: No no!
  // yield delay(1000)
  yield put(WebsocketActions.SendRpc('ModulesService', 'ListModulesRequest', { parent: action.payload.appid }))
}

function* watcherSaga() {
  yield takeLatest(AppNavigationTypes.LOADED, workerSaga)
}

export default [watcherSaga]
