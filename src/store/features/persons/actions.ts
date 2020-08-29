import { PersonTypes } from './types'
import { Person } from './models'

import { createAction } from '@reduxjs/toolkit'

export const selectPerson = createAction<string>(PersonTypes.SELECT)

export const fetchPersonList = createAction(PersonTypes.LIST_FETCH)

export const fetchPersonListRequest = createAction(PersonTypes.LIST_FETCH_REQUEST)

export const fetchPersonListSuccess = createAction<Person[]>(PersonTypes.LIST_FETCH_SUCCESS)

export const fetchPersonListFailure = createAction<Error>(PersonTypes.LIST_FETCH_FAILURE)

export const fetchPerson = createAction<string>(PersonTypes.FETCH)

export const fetchPersonRequest = createAction<string>(PersonTypes.FETCH_REQUEST)

export const fetchPersonSuccess = createAction<Person>(PersonTypes.FETCH_SUCCESS)

export const fetchPersonFailure = createAction<{ uuid: string; error: Error }>(PersonTypes.FETCH_FAILURE)
