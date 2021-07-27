import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import alertReducer from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    modals: modalReducer,
    alerts: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type GetState = () => RootState;
export default store;
