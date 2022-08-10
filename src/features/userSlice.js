import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("auth")) || null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
