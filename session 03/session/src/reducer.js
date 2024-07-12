import { DECREMENT, INCREMENT, RESET } from "./actions";

const INITIAL_STORE = { count: 0 };

const counterReducer = (state = INITIAL_STORE, action) => {
  console.log("🚀 ~ counterReducer ~ action:", action);
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return INITIAL_STORE;
    default:
      return state;
  }
};

export default counterReducer;
