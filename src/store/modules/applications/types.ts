import { Application, ApplicationsX } from './models'

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

  START = 'APPLICATION_START',
  STARTING = 'APPLICATION_STARTING', // Show the loader while loading the data
  STARTED = 'APPLICATION_STARTED',
  STOP = 'APPLICATION_STOP',
  STOPPED = 'APPLICATION_STOPPED',
  FAILED = 'APPLICATION_FAILED', // Show the error if any or RBAC restrictions

  GET = 'APPLICATION_GET',
  GET_SUCCESS = 'APPLICATION_GET_SUCCESS',
}

interface Select {
  readonly type: ApplicationTypes.SELECT
  readonly uuid: string
  readonly meta: object
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

interface StartApplication {
  readonly type: ApplicationTypes.START
  readonly uuid: string
}
interface StartingApplication {
  readonly type: ApplicationTypes.STARTING
}
interface StartedApplication {
  readonly type: ApplicationTypes.STARTED
}
interface StopApplication {
  readonly type: ApplicationTypes.STOP
}
interface StoppedApplication {
  readonly type: ApplicationTypes.STOPPED
}
interface FailedApplication {
  readonly type: ApplicationTypes.FAILED
}

interface Get {
  readonly type: ApplicationTypes.GET
  readonly meta: object
  readonly payload: object
}

interface GetSuccess {
  readonly type: ApplicationTypes.GET_SUCCESS
  readonly payload: ApplicationsX
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
  | StartApplication
  | StartingApplication
  | StartedApplication
  | StopApplication
  | StoppedApplication
  | FailedApplication
  | Get
  | GetSuccess
