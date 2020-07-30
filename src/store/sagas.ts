import createSagaMiddleware from 'redux-saga'
import { all, spawn, call } from 'redux-saga/effects'

// HYGEN.IO: INJECT IMPORT HERE
import route from './features/routing/sagas'
import system from './features/system/sagas'
// import users from './modules/users/sagas'
import applications from './features/applications/sagas'
import appModules from './features/app-navigation/sagas'
// import organizations from './modules/organizations/sagas'

export const rootSagas = {
  // HYGEN.IO: INJECT ROOT SAGA HERE
  route,
  system,
  // users,
  applications,
  // organizations,
  appModules,
}

export const sagaMiddleware = createSagaMiddleware()

export async function startSagas() {
  for (const name in rootSagas) {
    const sagas = rootSagas[name]

    // eslint-disable-next-line
    function* saga(): any {
      yield all(
        sagas.map(saga =>
          spawn(function*() {
            while (true) {
              try {
                yield call(saga)
                break
              } catch (err) {
                console.error(err)
              }
            }
          })
        )
      )
    }

    sagaMiddleware.run(saga)
  }
}
