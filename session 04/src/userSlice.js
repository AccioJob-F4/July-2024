import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const Api = {
  fetchUser: async (userId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId) {
          resolve({ id: userId, name: "Divyansh Singh" });
        } else {
          reject(new error("User not found"));
        }
      }, 1000);
    });
  },
};

export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const response = await Api.fetchUser(userId);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
