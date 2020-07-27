import { WebsocketTypes, WebsocketActionTypes } from './types'

export const websocketConnect = (url: string): WebsocketActionTypes => ({
  type: WebsocketTypes.CONNECT,
  payload: {
    url,
  },
})

export const websocketConnecting = (): WebsocketActionTypes => ({
  type: WebsocketTypes.CONNECTING,
})

export const websocketConnected = (): WebsocketActionTypes => ({
  type: WebsocketTypes.CONNECTED,
})

export const websocketSend = (type: string, payload: object): WebsocketActionTypes => ({
  type: WebsocketTypes.SEND,
  payload: {
    type,
    payload,
  },
})

export const websocketDisconnect = (): WebsocketActionTypes => ({
  type: WebsocketTypes.DISCONNECT,
})

export const websocketDisconnected = (): WebsocketActionTypes => ({
  type: WebsocketTypes.DISCONNECTED,
})
