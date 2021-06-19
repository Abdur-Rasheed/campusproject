import axios from "axios";
import rootReducer from "./reducers";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

// Individual reducers altogether under an alias
// import * as reducers from '../../reducers';

// Construct our Redux store
const combinedreducers = combineReducers(rootReducer);
const logger = createLogger({ collapsed: true });
const enhancer = composeWithDevTools({});

const store = configureStore({
  reducer: combinedreducers,
//   middleware: applyMiddleware(
//     thunkMiddleware.withExtraArgument({ axios }),
//     logger
//   ),
});

// Export our store by default, which will be provided to and injected within our entire application
export default store;
// export default createStore(rootReducer,
//     applyMiddleware()
//     )
