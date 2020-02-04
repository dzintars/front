import createSagaMiddleware from 'redux-saga';
import { all, spawn, call } from 'redux-saga/effects';

// HYGEN.IO: INJECT IMPORT HERE
import route from './modules/routing/sagas';
import users from './modules/users/sagas';

export const rootSagas = {
  // HYGEN.IO: INJECT ROOT SAGA HERE
  route,
  users,
};

export const sagaMiddleware = createSagaMiddleware();

export async function startSagas() {
  for (const name in rootSagas) {
    const sagas = rootSagas[name];

    function* saga(): any {
      yield all(
        sagas.map(saga =>
          spawn(function*() {
            while (true) {
              try {
                yield call(saga);
                break;
              } catch (err) {
                console.error(err);
              }
            }
          })
        )
      );
    }

    sagaMiddleware.run(saga);
  }
}
