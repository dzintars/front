import { websocketConnected, websocketDisconnected } from './actions'

// const wsApi = 'ws://localhost:9090'
const wsApi = 'wss://api.oswee.com'

const SOCKET_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3,
}

const websocketMiddleware = ({ dispatch }) => next => {
  const websocket = new WebSocket(wsApi)
  Object.assign(websocket, {
    onopen: () => dispatch(websocketConnected()),
    onclose: () => dispatch(websocketDisconnected()),
    onerror: error => console.log(`WS Error: ${error.data} `),
    onmessage: event => {
      dispatch(JSON.parse(event.data))
    },
  })

  return action => {
    // TODO: What if we receive an action before connection is established?
    if (websocket.readyState === SOCKET_STATES.OPEN && action.meta && action.meta.websocket) {
      // Remove action metadata before sending to the server
      const cleanAction = Object.assign({}, action, {
        meta: undefined,
        // Force message augmentation (optional)
      })
      // TODO: Make action Type CamelCase
      websocket.send(JSON.stringify(cleanAction))
    }
    next(action)
  }
}

export default websocketMiddleware
