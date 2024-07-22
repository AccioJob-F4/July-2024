import { createStore, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import movieReducer from "./reducers/movieReducer";

const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
