import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./actions";

const INITIAL_STORE = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STORE, action) => {
  console.log("🚀 ~ userReducer ~ action:", action);
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
