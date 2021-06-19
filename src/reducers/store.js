import axios from 'axios';
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";


// Construct our Redux store
// const combinedReducers = ;
const logger = createLogger({ collapsed: true });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    logger,
    thunkMiddleware.withExtraArgument({ axios })
  ]),
  enhancers: [composeWithDevTools({})]
});

// Export our store by default, which will be provided to and injected within our entire application
export default store;
