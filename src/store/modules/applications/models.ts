export interface Application {
  readonly id: string
  readonly title: string
  readonly component: string
  readonly permalink: string
  readonly modules: string[]
}

export interface ApplicationsState {
  readonly byId: { [id: string]: Application }
  readonly allIds: string[]
  readonly fetching: boolean
  readonly selected: {
    uuid: string
    state: number
  }
  readonly error: Error
  readonly defaultApplication: string
}

export interface ApplicationsX {
  readonly byId: { [id: string]: Application }
  readonly allIds: string[]
}
