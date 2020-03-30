export interface Application {
  readonly uuid: string
  readonly title: string
  readonly component: string
  readonly permalink: string
}

export interface ApplicationsState {
  readonly entities: { [uuid: string]: Application }
  readonly ids: string[]
  readonly fetching: boolean
  readonly selected: {
    uuid: string
    state: number
  }
  readonly error: Error
  readonly defaultApplication: string
}

export interface ApplicationsX {
  readonly entities: { [uuid: string]: Application }
  readonly ids: string[]
}
