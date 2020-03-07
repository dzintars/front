import { websocketConnected, websocketDisconnected } from './actions'

const wsApi = 'ws://localhost:8080/ws'

const SOCKET_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3,
}

const user = 'dzintars'

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
    if (websocket.readyState === SOCKET_STATES.OPEN && action.meta && action.meta.websocket) {
      // Remove action metadata before sending to the server
      const cleanAction = Object.assign({}, action, {
        meta: undefined,
        user: user,
      })
      websocket.send(JSON.stringify(cleanAction))
    }
    next(action)
  }
}

export default websocketMiddleware
