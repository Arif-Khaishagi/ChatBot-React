import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "./chatSlice";

export const store = configureStore({
  reducer: chatReducer,
});
