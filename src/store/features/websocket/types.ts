export enum WebsocketTypes {
  CONNECT = 'WEBSOCKET_CONNECT',
  CONNECTING = 'WEBSOCKET_CONNECTING',
  CONNECTED = 'WEBSOCKET_CONNECTED',
  DISCONNECT = 'WEBSOCKET_DISCONNECT',
  DISCONNECTED = 'WEBSOCKET_DISCONNECTED',
}

interface Connect {
  readonly type: WebsocketTypes.CONNECT
}
interface Connecting {
  readonly type: WebsocketTypes.CONNECTING
}
interface Connected {
  readonly type: WebsocketTypes.CONNECTED
}
interface Disconnect {
  readonly type: WebsocketTypes.DISCONNECT
}
interface Disconnected {
  readonly type: WebsocketTypes.DISCONNECTED
}

export type WebsocketActionTypes = Connect | Connecting | Connected | Disconnect | Disconnected
