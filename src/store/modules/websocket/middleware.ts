import { websocketConnected, websocketDisconnected } from './actions'

// const wsApi = 'ws://localhost:9090'
const wsApi = 'wss://api.oswee.com'

const SOCKET_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3,
}

function getCookie(cname) {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

const user = getCookie('user')

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
      // TODO: Make action Type CamelCase
      websocket.send(JSON.stringify(cleanAction))
    }
    next(action)
  }
}

export default websocketMiddleware
