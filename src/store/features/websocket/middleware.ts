import { websocketConnected, websocketDisconnected } from './actions'
import { WebsocketTypes, WebsocketActionTypes } from './types'

let websocket: WebSocket = null

const websocketMiddleware = ({ dispatch }) => next => {
  return (action: WebsocketActionTypes) => {
    switch (action.type) {
      case WebsocketTypes.CONNECT:
        if (websocket !== null) {
          websocket.close()
        }
        websocket = new WebSocket(action.payload.url)
        websocket.onopen = (): void => dispatch(websocketConnected())
        break
      case WebsocketTypes.CONNECTED:
        websocket.onmessage = (event): void => dispatch(JSON.parse(event.data))
        websocket.onerror = (error): void => console.log(`WS Error: ${error} `)
        websocket.onclose = (): void => dispatch(websocketDisconnected())
        break
      case WebsocketTypes.SEND: {
        const message = {
          type: action.payload.type,
          payload: action.payload.payload,
        }
        console.log('WSS Message: ', message)
        websocket.send(JSON.stringify(message))
        break
      }
      case WebsocketTypes.DISCONNECT:
        if (websocket !== null) {
          websocket.close()
        }
        websocket = null
        break
      case WebsocketTypes.DISCONNECTED:
        // TODO: Retry connection if configured
        break
      default:
        break
    }
    next(action)
  }
}

export default websocketMiddleware
