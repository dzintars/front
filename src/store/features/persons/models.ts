export interface Person {
  readonly uuid: string
  readonly title: string
  readonly type: string
  readonly permalink: string
}

export type { PersonsState } from './reducer'
