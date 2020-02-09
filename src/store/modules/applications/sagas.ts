import { call, put, select, takeLatest } from 'redux-saga/effects'
import { ApplicationTypes } from './types'
import { fetchApplicationListRequest, fetchApplicationListSuccess, fetchApplicationListFailure } from './actions'
// import { ApplicationSelectors } from './selectors'
// import { Application } from './models'
import { API } from './api'

// function* selectApplicationSaga(action: ReturnType<typeof ApplicationActions.selectApplication>) {
//   const { uuid } = action.payload
//   const shouldFetch = yield select(ApplicationSelectors.shouldFetch)
//   if (shouldFetch) {
//     yield put(fetchApplication(uuid))
//   }
// }

// function* selectApplicationListener() {
//   yield takeLatest(ApplicationTypes.SELECT, selectApplicationSaga)
// }

// const getPage = state => state.applications.page

// function* fetchApplicationListSaga() {
//   try {
//     const page = yield select(getPage)
//     const applications = yield call(Api.fetchApplications(), page)
//     yield put(fetchApplicationListSuccess(applications))
//   } catch (err) {
//     console.error(err)
//     yield put(fetchApplicationListFailure(err))
//   }
// }

function* fetchApplicationListSaga(action) {
  yield put(fetchApplicationListRequest())
  try {
    const applications = yield call(API.fetchApplications)
    yield put(fetchApplicationListSuccess(applications))
  } catch (err) {
    console.error(err)
    yield put(fetchApplicationListFailure(err))
  }
}

function* fetchApplicationListListener() {
  yield takeLatest(ApplicationTypes.LIST_FETCH, fetchApplicationListSaga)
}

// export async function fetchApplication(uuid: string) {
//   const url = `${window.MyApp.localApi}/applications/${uuid}`
//   const resp = await fetch(url)
//   const json = await resp.json()
//   return <Application>json
// }

// function* fetchApplicationSaga(action: ReturnType<typeof ApplicationActions.fetchApplication>) {
//   const { uuid } = action.payload

//   yield put(ApplicationActions.fetchApplicationRequest(uuid))
//   try {
//     const application = yield call(fetchApplication, uuid)
//     yield put(ApplicationActions.fetchApplicationSuccess(application))
//   } catch (err) {
//     console.error(err)
//     yield put(ApplicationActions.fetchApplicationFailure(uuid, err))
//   }
// }

// function* fetchApplicationListener() {
//   yield takeLatest(ApplicationTypes.FETCH, fetchApplicationSaga)
// }

// export default [selectApplicationListener, fetchApplicationListListener, fetchApplicationListener]
export default [fetchApplicationListListener]
