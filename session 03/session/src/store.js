import { createStore, applyMiddleware } from "redux";
import counterReducer from "./reducer";
import { middleware } from "./middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(middleware))
);

export default store;
