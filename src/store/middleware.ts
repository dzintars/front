import logger from 'redux-logger'
import { storageMiddleware } from './storage'
import { historyMiddleware } from './modules/routing/middleware'
import websocketMiddleware from './modules/websocket/middleware'
import { sagaMiddleware } from './sagas'

export const middleware = [logger, storageMiddleware, websocketMiddleware, historyMiddleware, sagaMiddleware]
