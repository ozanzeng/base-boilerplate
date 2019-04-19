import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createPromise } from 'redux-promise-middleware';

import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const middleware = [
//   process.env.NODE_ENV !== "production" && logger,
//   thunk
// ].filter(Boolean);
const promise = createPromise({ types: { fulfilled: 'success' } });

export const store = createStore(
  rootReducer,
	composeWithDevTools(
    applyMiddleware(
      promise, thunk, logger)
	)
);
