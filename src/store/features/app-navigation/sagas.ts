import { put, takeLatest } from 'redux-saga/effects'
import { AppNavigationTypes } from './types'
import { fetchModulesListRequest } from './actions'

function* listFetchModulesSaga() {
  yield put(fetchModulesListRequest())
}

function* listFetchModulesListener() {
  yield takeLatest(AppNavigationTypes.LIST_FETCH_MODULES, listFetchModulesSaga)
}

export default [listFetchModulesListener]
