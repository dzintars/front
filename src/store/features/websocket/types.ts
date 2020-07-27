export enum WebsocketTypes {
  CONNECT = 'WEBSOCKET__CONNECT',
  CONNECTING = 'WEBSOCKET__CONNECTING',
  CONNECTED = 'WEBSOCKET__CONNECTED',
  SEND = 'WEBSOCKET__SEND',
  DISCONNECT = 'WEBSOCKET__DISCONNECT',
  DISCONNECTED = 'WEBSOCKET__DISCONNECTED',
}

interface Connect {
  readonly type: WebsocketTypes.CONNECT
  readonly payload: {
    url: string
  }
}
interface Connecting {
  readonly type: WebsocketTypes.CONNECTING
}
interface Connected {
  readonly type: WebsocketTypes.CONNECTED
}
interface Send {
  readonly type: WebsocketTypes.SEND
  readonly payload: {
    type: string
    payload: object
  }
}
interface Disconnect {
  readonly type: WebsocketTypes.DISCONNECT
}
interface Disconnected {
  readonly type: WebsocketTypes.DISCONNECTED
}

export type WebsocketActionTypes = Connect | Connecting | Connected | Send | Disconnect | Disconnected
