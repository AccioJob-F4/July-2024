import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducers";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./actions";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(userReducer, applyMiddleware(thunk));
// const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});

export default store;
