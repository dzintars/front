import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { middleware } from './middleware';
import { rootReducer } from './reducer';
import { initialState } from './storage';
import { startSagas } from './sagas';
import { startRouting } from './modules/routing/middleware';
import { startReselect } from './reselect';

const composeEnhancers = composeWithDevTools({ actionsBlacklist: [] });
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, initialState(), enhancer);

startSagas().then(() => {
  startReselect(store);
  startRouting(store);
});
