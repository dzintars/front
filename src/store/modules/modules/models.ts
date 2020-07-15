export interface Module {
  readonly id: string
  readonly title: string
}

export interface ModulesState {
  readonly byId: { [id: string]: Module }
  readonly allIds: string[]
  readonly highlightedModule: string
}
