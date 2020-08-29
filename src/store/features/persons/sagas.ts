import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchPersonListRequest, fetchPersonListSuccess, fetchPersonListFailure, fetchPersonList } from './actions'
import { API } from './api'

function* fetchPersonListSaga(action) {
  yield put(fetchPersonListRequest())
  try {
    const persons = yield call(API.fetchPersons)
    yield put(fetchPersonListSuccess(persons))
  } catch (err) {
    console.error(err)
    yield put(fetchPersonListFailure(err))
  }
}

function* fetchPersonListListener() {
  yield takeLatest(fetchPersonList, fetchPersonListSaga)
}

export default [fetchPersonListListener]
