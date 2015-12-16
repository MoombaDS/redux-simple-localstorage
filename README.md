redux-simple-localstorage
=============

Ridiculously simple implementation for serialising the entire Redux store to local storage and retrieving it on application restart.

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

// create a store that will continuously save its state to localStorage at `"Key"`
// and use eventual previously stored state at app start
const store = applyMiddleware(saveLocal("Key"))(createStore)(rootReducer, savedState("Key") || initialState);
```

## License

MIT
