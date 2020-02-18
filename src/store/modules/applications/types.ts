import { Application } from './models'

export enum ApplicationTypes {
  SELECT = 'APPLICATION_SELECT',

  LIST_FETCH = 'APPLICATION_LIST_FETCH',
  LIST_FETCH_REQUEST = 'APPLICATION_LIST_FETCH_REQUEST',
  LIST_FETCH_SUCCESS = 'APPLICATION_LIST_FETCH_SUCCESS',
  LIST_FETCH_FAILURE = 'APPLICATION_LIST_FETCH_FAILURE',

  FETCH = 'APPLICATION_FETCH',
  FETCH_REQUEST = 'APPLICATION_FETCH_REQUEST',
  FETCH_SUCCESS = 'APPLICATION_FETCH_SUCCESS',
  FETCH_FAILURE = 'APPLICATION_FETCH_FAILURE',
}

interface Select {
  readonly type: ApplicationTypes.SELECT
  readonly uuid: string
  readonly meta: any
}
interface ListFetch {
  readonly type: ApplicationTypes.LIST_FETCH
}
interface ListFetchRequest {
  readonly type: ApplicationTypes.LIST_FETCH_REQUEST
}
interface ListFetchSuccess {
  readonly type: ApplicationTypes.LIST_FETCH_SUCCESS
  readonly applications: Application[]
}
interface ListFetchFailure {
  readonly type: ApplicationTypes.LIST_FETCH_FAILURE
  readonly error: Error
}
interface Fetch {
  readonly type: ApplicationTypes.FETCH
  readonly uuid: string
}
interface FetchRequest {
  readonly type: ApplicationTypes.FETCH_REQUEST
  readonly uuid: string
}
interface FetchSuccess {
  readonly type: ApplicationTypes.FETCH_SUCCESS
  readonly application: Application
}
interface FetchFailure {
  readonly type: ApplicationTypes.FETCH_FAILURE
  readonly uuid: string
  readonly error: Error
}

export type ApplicationActionTypes =
  | Select
  | ListFetch
  | ListFetchRequest
  | ListFetchSuccess
  | ListFetchFailure
  | Fetch
  | FetchRequest
  | FetchSuccess
  | FetchFailure
