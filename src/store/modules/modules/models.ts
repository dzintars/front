export interface Module {
  readonly id: string
  readonly title: string
}

export interface ModulesState {
  readonly entities: { [id: string]: Module }
  readonly ids: string[]
}
