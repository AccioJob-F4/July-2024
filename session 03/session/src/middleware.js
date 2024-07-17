import { DECREMENT, INCREMENT, RESET } from "./actions";

export const middleware = (store) => (next) => (action) => {
  const reduxState = store.getState();

  const updatedAction = { ...action };

  if (updatedAction.type === INCREMENT) {
    updatedAction.updatedIncrementActionCount =
      reduxState.incrementActionCount + 1;
  } else if (updatedAction.type === DECREMENT) {
    updatedAction.updatedDecrementActionCount =
      reduxState.decrementActionCount + 1;
  } else if (updatedAction.type === RESET) {
    updatedAction.updatedResetActionCount = reduxState.resetActionCount + 1;
  }

  return next(updatedAction);
};
