import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import { postApi } from "./API/postApi";


export const store = configureStore({
  reducer:{
    user: userSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;