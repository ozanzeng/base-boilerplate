import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createPromise } from 'redux-promise-middleware';
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/rootReducer";


const logger = createLogger({
  collapsed: true,
});

const promise = createPromise({ 
  types: { 
    fulfilled: 'success'
  } 
});

const middlewares = [promise, thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
	composeWithDevTools(
    applyMiddleware(
      ...middlewares)
	)
);
