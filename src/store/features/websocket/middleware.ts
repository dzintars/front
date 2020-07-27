import { websocketConnected, websocketDisconnected } from './actions'
import { WebsocketTypes, WebsocketActionTypes } from './types'

let websocket: WebSocket

const websocketMiddleware = ({ dispatch }) => next => {
  return (action: WebsocketActionTypes) => {
    switch (action.type) {
      case WebsocketTypes.CONNECT:
        websocket = new WebSocket(action.payload.url)
        websocket.onopen = (): void => dispatch(websocketConnected())
        break
      case WebsocketTypes.CONNECTED:
        // console.log(action)
        websocket.onmessage = (event): void => dispatch(JSON.parse(event.data))
        websocket.onerror = (error): void => console.log(`WS Error: ${error} `)
        websocket.onclose = (): void => dispatch(websocketDisconnected())
        break
      case WebsocketTypes.SEND: {
        console.log(action)
        // const cleanAction = Object.assign({}, action, {
        //   meta: undefined,
        //   // Force message augmentation (optional)
        // })
        const message = {
          type: action.payload.type,
          payload: action.payload.payload,
        }
        websocket.send(JSON.stringify(message))
        break
      }
      case WebsocketTypes.DISCONNECT:
        websocket.close()
        break
      default:
        break
    }
    next(action)
  }
}

export default websocketMiddleware
