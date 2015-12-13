redux-simple-localstorage
=============

Ridiculously simple implementation for serialising the entire Redux store to local storage and retreiving it on application restart.

## Installation

```
npm install --save redux-simple-localstorage
```

To enable, use [`applyMiddleware()`](http://rackt.github.io/redux/docs/api/applyMiddleware.html) and pass the `savedState` to the reducers:

```js
import { createStore, applyMiddleware } from "redux";
import { saveLocal, savedState } from "redux-simple-localstorage";
import rootReducer from "./reducers/index";
import initialState from "./initialstate";

// create a store that has saveLocal middleware with the key as a bound parameter
const store = applyMiddleware(saveLocal.bind(null, "Key"))(createStore)(rootReducer, savedState("Key") || initialState());
```

## License

MIT
