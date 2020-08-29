import { Person } from './models'

import { createReducer, createEntityAdapter } from '@reduxjs/toolkit'
import {
  selectPerson,
  fetchPersonListSuccess,
  fetchPersonListFailure,
  fetchPersonListRequest,
  fetchPersonSuccess,
  fetchPersonFailure,
  fetchPersonRequest,
} from './actions'

const personEntityAdapter = createEntityAdapter<Person>({
  selectId: person => person.uuid,
})

const reducer = createReducer(
  personEntityAdapter.getInitialState({
    fetching: false,
    selected: '',
    error: null,
  }),
  builder => {
    builder
      .addCase(selectPerson, (state, action) => {
        state.selected = action.payload
      })
      .addCase(fetchPersonListRequest, state => {
        state.fetching = true
        state.error = null
      })
      .addCase(fetchPersonListSuccess, personEntityAdapter.setAll)
      .addCase(fetchPersonListFailure, (state, action) => {
        state.fetching = false
        state.error = action.payload
      })
      .addCase(fetchPersonRequest, state => {
        state.fetching = true
        state.error = null
      })
      .addCase(fetchPersonSuccess, personEntityAdapter.upsertOne) // this previously had a bug, you were forgetting to add the uuid to `ids` if it wasn't in there before
      .addCase(fetchPersonFailure, (state, action) => {
        state.fetching = false
        state.error = action.payload
      })
  }
)

export default reducer
export type PersonsState = ReturnType<typeof reducer>
