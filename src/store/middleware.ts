import { historyMiddleware } from './modules/routing/middleware'
import websocketMiddleware from './modules/websocket/middleware'
import { sagaMiddleware } from './sagas'
import { storageMiddleware } from './storage'

export const middleware = [historyMiddleware, sagaMiddleware, storageMiddleware, websocketMiddleware]
