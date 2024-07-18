// import { takeEvery, call, put } from "redux-saga/effects";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});
export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

// const Api = {
//   fetchUser: async (userId) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (userId) {
//           resolve({ id: userId, name: "Divyansh Singh" });
//         } else {
//           reject(new error("User not found"));
//         }
//       }, 1000);
//     });
//   },
// };

// function* fetchUser(action) {
//   try {
//     const user = yield call(Api.fetchUser, action.payload.userId);
//     yield put({ type: FETCH_USER_SUCCESS, payload: user });
//   } catch (error) {
//     yield put({ type: FETCH_USER_FAILURE, payload: error });
//   }
// }

// export function* rootSaga() {
//   yield takeEvery(FETCH_USER_REQUEST, fetchUser);
// }

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};
