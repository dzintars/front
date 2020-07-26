export interface Application {
  readonly id: string
  readonly title: string
  readonly permalink: string
  readonly modules: string[]
}

export interface Module {
  readonly id: string
  readonly title: string
  readonly permalink: string
}

export interface ApplicationsState {
  readonly entities: { [id: string]: Application }
  readonly ids: string[]
  readonly fetching: boolean
  readonly selected: {
    id: string
    state: number
  }
  readonly error: Error
  readonly defaultApplication: string
  readonly currentApplication: string
}
