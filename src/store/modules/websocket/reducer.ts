import { WebsocketTypes, WebsocketActionTypes } from './types'
import { WebsocketState } from './models'

export { WebsocketState }

const initialState: WebsocketState = {
  state: WebsocketTypes.DISCONNECTED,
}

export default (state: WebsocketState = initialState, action: WebsocketActionTypes): WebsocketState => {
  switch (action.type) {
    case WebsocketTypes.CONNECT:
      return { ...state, state: action.type }
    case WebsocketTypes.CONNECTING:
      return { ...state, state: action.type }
    case WebsocketTypes.CONNECTED:
      return { ...state, state: action.type }
    case WebsocketTypes.DISCONNECT:
      return { ...state, state: action.type }
    case WebsocketTypes.DISCONNECTED:
      return { ...state, state: action.type }

    default:
      return state
  }
}
