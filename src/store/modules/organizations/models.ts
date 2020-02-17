export interface Organization {
  readonly uuid: string
  readonly title: string
  readonly type: string
  readonly permalink: string
}

export interface OrganizationsState {
  readonly entities: { [uuid: string]: Organization }
  readonly ids: string[]
  readonly fetching: boolean
  readonly selected: string
  readonly error: Error
}
