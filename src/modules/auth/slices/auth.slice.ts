// import { User } from "@/modules/user/types/User";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
};

const storedToken = JSON.stringify(localStorage.getItem("token"));

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: typeof storedToken == "string" ? storedToken : null,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: string; token: string }>) => {
      localStorage.setItem("token", action.payload.token);

      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.removeItem("token");

      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = counterSlice.actions;
export default counterSlice.reducer;
