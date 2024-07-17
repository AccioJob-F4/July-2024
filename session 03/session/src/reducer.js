import { DECREMENT, INCREMENT, RESET } from "./actions";

const INITIAL_STORE = {
  count: 0,
  incrementActionCount: 0,
  decrementActionCount: 0,
  resetActionCount: 0,
};

const counterReducer = (state = INITIAL_STORE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        incrementActionCount: action.updatedIncrementActionCount,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        decrementActionCount: action.updatedDecrementActionCount,
      };
    case RESET:
      return {
        ...state,
        count: 0,
        resetActionCount: action.updatedResetActionCount,
      };
    default:
      return state;
  }
};

export default counterReducer;
