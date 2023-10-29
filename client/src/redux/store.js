import { configureStore } from "@reduxjs/toolkit"; // 1. import configureStore
import userReducer from "./user/userSlice"; // 2. import userReducer

export default configureStore({
  // 3. export configureStore
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
