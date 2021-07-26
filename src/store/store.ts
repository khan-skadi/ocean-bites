import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    modals: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type GetState = () => RootState;
export default store;
