# What we learned today

## Today we focused on two things: error handling and async await

1. Error handling in Javascript:
   1. Errors can happen for many reasons: we as developers can cause errors, the user can cause errors, the server that we request the data from can have an error.
   2. It is our duty as developers to make sure that our app does not crash if there is an error.
   3. The best way to [handle errors](./ErrorHandling/src/index.js) in Javascript is by using a `try catch` block.
   4. If an error happens anywhere in the `try` block, the execution of the function will stop and it will immediately go to the `catch` block.
   5. We have also learned that we can `throw` errors. For that, we use the [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object.
