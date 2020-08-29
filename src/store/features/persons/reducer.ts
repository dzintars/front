import { Person } from './models'

import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit'

export const personEntityAdapter = createEntityAdapter<Person>({
  selectId: person => person.uuid,
})

const slice = createSlice({
  name: 'persons',
  initialState: personEntityAdapter.getInitialState({
    fetching: false,
    selected: '',
    error: null,
  }),
  reducers: {
    selectPerson(state, action: PayloadAction<string>) {
      state.selected = action.payload
    },
    fetchPersonList() {}, // just create an action, the reducer does nothing
    fetchPersonListRequest(state) {
      state.fetching = true
      state.error = null
    },
    fetchPersonListSuccess: personEntityAdapter.setAll,
    fetchPersonListFailure(state, action: PayloadAction<Error>) {
      state.fetching = false
      state.error = action.payload
    },
    fetchPerson() {},
    fetchPersonRequest(state) {
      state.fetching = true
      state.error = null
    },
    fetchPersonSuccess: personEntityAdapter.upsertOne, // this previously had a bug, you were forgetting to add the uuid to `ids` if it wasn't in there before
    fetchPersonFailure(state, action) {
      state.fetching = false
      state.error = action.payload
    },
  },
})

export default slice.reducer
export type PersonsState = ReturnType<typeof slice.reducer>

export const {
  fetchPersonFailure,
  fetchPersonListFailure,
  fetchPersonListRequest,
  fetchPersonListSuccess,
  fetchPersonRequest,
  fetchPersonSuccess,
  selectPerson,
  fetchPerson,
  fetchPersonList,
} = slice.actions
