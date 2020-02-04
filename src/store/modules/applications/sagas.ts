import { call, put, select, takeLatest } from 'redux-saga/effects'
import { ApplicationTypes, ApplicationActions } from './actions'
import { ApplicationSelectors } from './selectors'
import { Application } from './model'

function* selectApplicationSaga(
  action: ReturnType<typeof ApplicationActions.selectApplication>
) {
  const { uuid } = action.payload
  const shouldFetch = yield select(ApplicationSelectors.shouldFetch)
  if (shouldFetch) {
    yield put(ApplicationActions.fetchApplication(uuid))
  }
}

function* selectApplicationListener() {
  yield takeLatest(ApplicationTypes.APPLICATION_SELECT, selectApplicationSaga)
}

export async function fetchApplications() {
  const url = `${window.MyApp.localApi}/applications`
  const resp = await fetch(url)
  const json = await resp.json()
  return <Application[]>json
}

function* fetchApplicationListSaga(
  action: ReturnType<typeof ApplicationActions.fetchApplicationList>
) {
  yield put(ApplicationActions.fetchApplicationListRequest())
  try {
    console.log('fetchApplicationListSaga')
    const applications = yield call(fetchApplications)
    yield put(ApplicationActions.fetchApplicationListSuccess(applications))
  } catch (err) {
    console.error(err)
    yield put(ApplicationActions.fetchApplicationListFailure(err))
  }
}

function* fetchApplicationListListener() {
  yield takeLatest(
    ApplicationTypes.APPLICATION_LIST_FETCH,
    fetchApplicationListSaga
  )
}

export async function fetchApplication(uuid: string) {
  const url = `${window.MyApp.localApi}/applications/${uuid}`
  const resp = await fetch(url)
  const json = await resp.json()
  return <Application>json
}

function* fetchApplicationSaga(
  action: ReturnType<typeof ApplicationActions.fetchApplication>
) {
  const { uuid } = action.payload

  yield put(ApplicationActions.fetchApplicationRequest(uuid))
  try {
    const application = yield call(fetchApplication, uuid)
    yield put(ApplicationActions.fetchApplicationSuccess(application))
  } catch (err) {
    console.error(err)
    yield put(ApplicationActions.fetchApplicationFailure(uuid, err))
  }
}

function* fetchApplicationListener() {
  yield takeLatest(ApplicationTypes.APPLICATION_FETCH, fetchApplicationSaga)
}

export default [
  selectApplicationListener,
  fetchApplicationListListener,
  fetchApplicationListener,
]
