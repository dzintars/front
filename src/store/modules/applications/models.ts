export interface Application {
  readonly uuid: string
  readonly title: string
  readonly type: string
  readonly permalink: string
}

export interface ApplicationsState {
  readonly entities: { [uuid: string]: Application }
  readonly ids: string[]
  readonly fetching: boolean
  readonly selected: string
  readonly error: Error
  readonly data: object
}
