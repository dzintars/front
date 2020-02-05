export interface Application {
  readonly uuid: string
  readonly title: string
  readonly type: string
}

export interface ApplicationsState {
  entities: { [uuid: string]: Application }
  ids: string[]
  fetching: boolean
  selected: string
  error: Error
}
