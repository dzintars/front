import { AppModule, AppModules } from './models'

export enum AppNavigationTypes {
  SELECT_MODULE = 'APP_NAVIGATION__SELECT_MODULE',

  LIST_FETCH_MODULES = 'APP_NAVIGATION__LIST_FETCH_MODULES',
  LIST_FETCH_MODULES_REQUEST = 'APP_NAVIGATION__LIST_FETCH_MODULES_REQUEST',
  LIST_FETCH_MODULES_SUCCESS = 'APP_NAVIGATION__LIST_FETCH_MODULES_SUCCESS',
  LIST_FETCH_MODULES_FAILURE = 'APP_NAVIGATION__LIST_FETCH_MODULES_FAILURE',

  FETCH_MODULE = 'APP_NAVIGATION__FETCH_MODULE',
  FETCH_MODULE_REQUEST = 'APP_NAVIGATION__FETCH_MODULE_REQUEST',
  FETCH_MODULE_SUCCESS = 'APP_NAVIGATION__FETCH_MODULE_SUCCESS',
  FETCH_MODULE_FAILURE = 'APP_NAVIGATION__FETCH_MODULE_FAILURE',
}

interface SelectModule {
  readonly type: AppNavigationTypes.SELECT_MODULE
  readonly payload: {
    id: string
  }
  readonly meta: object
}
interface ListFetchModules {
  readonly type: AppNavigationTypes.LIST_FETCH_MODULES
}
interface ListFetchModulesRequest {
  readonly type: AppNavigationTypes.LIST_FETCH_MODULES_REQUEST
  readonly meta: object
}
interface ListFetchModulesSuccess {
  readonly type: AppNavigationTypes.LIST_FETCH_MODULES_SUCCESS
  readonly payload: AppModules
}
interface ListFetchModulesFailure {
  readonly type: AppNavigationTypes.LIST_FETCH_MODULES_FAILURE
  readonly payload: {
    error: Error
  }
}
interface FetchModule {
  readonly type: AppNavigationTypes.FETCH_MODULE
  readonly payload: object
}
interface FetchModuleRequest {
  readonly type: AppNavigationTypes.FETCH_MODULE_REQUEST
  readonly payload: object
}
interface FetchModuleSuccess {
  readonly type: AppNavigationTypes.FETCH_MODULE_SUCCESS
  readonly payload: {
    module: AppModule
  }
}
interface FetchModuleFailure {
  readonly type: AppNavigationTypes.FETCH_MODULE_FAILURE
  readonly payload: {
    error: Error
  }
}

export type AppNavigationActionTypes =
  | SelectModule
  | ListFetchModules
  | ListFetchModulesRequest
  | ListFetchModulesSuccess
  | ListFetchModulesFailure
  | FetchModule
  | FetchModuleRequest
  | FetchModuleSuccess
  | FetchModuleFailure
