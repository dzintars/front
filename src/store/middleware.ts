import { historyMiddleware } from './modules/routing/middleware';
import { sagaMiddleware } from './sagas';
import { storageMiddleware } from './storage';

export const middleware = [
  historyMiddleware,
  sagaMiddleware,
  storageMiddleware,
];
