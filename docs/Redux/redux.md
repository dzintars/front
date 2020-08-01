# Redux

https://www.youtube.com/watch?v=_OfJZfmZCgU
State categories

Data State
Data state covers information which your application temporally stores about the big wide world. That is, it covers your business data.

Communication State
This type of state covers the seemingly simple things like loading spinners and error messages. These are used to manage HTTP results and side-effects

Control State
In contrast to the above two types of state, Control state does not represent the application's environment. Instead, it refers to the state which the user has input into the app. Form inputs, selected items, things like that.

Session State
When you have information which needs to be available application-wide, but its shape is less well defined than your project's schedule, it is probably Session state.
User ID, token, preferences.

Location State
What counts as location? Intuitively, I'd say "anything which you can give someone concrete directions to". Concretely: Location state is that UTF-8 mess which appears in your URL bar.

## TypeScript

https://github.com/piotrwitek/react-redux-typescript-guide

## Naming

How to name WSS action creators

[Google API Design guidelines](https://cloud.google.com/apis/design/naming_convention#method_names) could give some hints.

One idea is to use:

`ListBooksRequest` to get a list of all books and the response will be like `ListBooksResponse`. So, the action creator could look like this:

```ts
interface ResourceId {
  id: string
}

interface Book {
  id: ResourceId
  title: string
  isbn: string
}
// List
// Get
// Create
// Update
// Rename
// Delete

interface ListBooksRequest {
  readonly type: BooksTypes.LIST_BOOKS_REQUEST
}

interface ListBooksResponse {
  readonly type: BooksTypes.LIST_BOOKS_RESPONSE
  readonly payload: {
    entities: { [id: string]: Book }
    ids: ResourceId[]
  }
}

interface GetBookRequest {
  readonly type: BooksTypes.GET_BOOK_REQUEST
  readonly payload: {
    id: string
  }
}

interface GetBookResponse {
  readonly type: BooksTypes.GET_BOOK_RESPONSE
  readonly payload: {
    book: Book
  }
}
```

How to name constants

How to name action types

How to name action creators

## Forms

[React & Redux #15. Authentication: Login Form](https://www.youtube.com/watch?v=tIajENrOJ0o)
