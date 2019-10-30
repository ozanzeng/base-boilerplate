import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createPromise } from 'redux-promise-middleware';
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";

const promise = createPromise({ 
  types: { 
    fulfilled: 'success'
  } 
});

const logger = createLogger({
  collapsed: true,
});

const middleware = [promise, thunk];


if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
	composeWithDevTools(
    applyMiddleware(
      ...middleware)
	)
);
