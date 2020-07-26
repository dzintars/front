export interface AppModule {
  readonly id: string
  readonly title: string
  readonly permalink: string
}

export interface AppNavigationState {
  readonly entities: { [id: string]: AppModule }
  readonly ids: string[]
  readonly fetching: boolean
  readonly selected: string
  readonly applicationId: string
  readonly error: Error
}

export interface AppModules {
  readonly entities: { [id: string]: AppModule }
  readonly ids: string[]
}
