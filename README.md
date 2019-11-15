Redux Thunk

Redux Thunk is a middleware used (mainly) to make asynchronous API calls.

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

Why is this not so straightforward in React?

The answer is STATE.

1. STATE (before the call)
2. STATE (during the call)
3. STATE (answer received)

Generally, for any API request you want to dispatch
 at least 2 different kinds of actions ...

 1. An action informing the reducers that the request has begun
 2. An action informing the reducers that the request finished succesfully

Thunk allows us to return function instead of object as an action

CLI

npm i redux
npm install --save redux-thunk

documentation

https://www.npmjs.com/package/redux-thunk
