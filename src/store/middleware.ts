import logger from 'redux-logger'
import { storageMiddleware } from './storage'
import { historyMiddleware } from './features/routing/middleware'
import websocketMiddleware from './features/websocket/middleware'
import { sagaMiddleware } from './sagas'

export const middleware = [logger, storageMiddleware, websocketMiddleware, historyMiddleware, sagaMiddleware]
