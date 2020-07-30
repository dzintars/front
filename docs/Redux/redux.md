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
