import { WebsocketTypes, WebsocketActionTypes } from './types'

export const websocketConnect = (): WebsocketActionTypes => ({
  type: WebsocketTypes.CONNECT,
})
export const websocketConnecting = (): WebsocketActionTypes => ({
  type: WebsocketTypes.CONNECTING,
})
export const websocketConnected = (): WebsocketActionTypes => ({
  type: WebsocketTypes.CONNECTED,
})
export const websocketDisconnect = (): WebsocketActionTypes => ({
  type: WebsocketTypes.DISCONNECT,
})
export const websocketDisconnected = (): WebsocketActionTypes => ({
  type: WebsocketTypes.DISCONNECTED,
})
