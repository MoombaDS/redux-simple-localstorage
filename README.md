redux-simple-localstorage
=============

Ridiculously simple implementation for serialising the entire Redux store to local storage and retrieving it on application restart.

## Installation

```
npm install --save redux-simple-localstorage
```

## Usage

The module exports a single function. Call that with the localStorage key, and you get an object with a `read` and `write` method:

```js
import ReduxLocalstorage from "redux-simple-localstorage"
const {read,write} = ReduxLocalstorage("myKey");
```

Now use `write` as a middleware and the result of `read` as initial state when you define your store:

```js
import { createStore, applyMiddleware } from "redux";
import { saveLocal, savedState } from "redux-simple-localstorage";

import rootReducer from "./reducers/index";
import initialState from "./initialstate";

const store = applyMiddleware(write)(createStore)(rootReducer, read() || initialState);
```

## License

MIT
