import { createSelector, createSlice, Dispatch, OutputSelector } from "@reduxjs/toolkit";

export interface AlertProps {
  open: boolean;
  severity?: "success" | "error";
  message?: string;
}

const initialState: AlertProps = {
  open: false,
  severity: "success",
  message: "",
};

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setProps: (state, action) => {
      const { open, severity, message } = action.payload;
      state.open = open;
      state.severity = severity;
      state.message = message;
    },
    clearProps: (state) => {
      state.open = false;
      state.severity = undefined;
      state.message = undefined;
    },
  },
});

export const { setProps, clearProps } = alertSlice.actions;
export default alertSlice.reducer;

export const setAlertProps = (payload: AlertProps) => async (dispatch: Dispatch) => dispatch(setProps(payload));

export const clearAlertProps = () => async (dispatch: Dispatch) => dispatch(clearProps());

const alertPropsSelector = (state) => state.alerts;

export const selectAlertProps: OutputSelector<
  AlertProps,
  AlertProps,
  (res: AlertProps) => AlertProps
> = createSelector(alertPropsSelector, (props) => ({ ...props }));
