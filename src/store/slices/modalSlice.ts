import { createSelector, createSlice, Dispatch, OutputSelector } from "@reduxjs/toolkit";

export interface ModalProps {
  type: string;
  data?: Object | null;
}

const initialState: ModalProps = {
  type: "",
  data: null,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    modalOpened: (state, action) => {
      const { type, data } = action.payload;
      state.type = type;
      state.data = data;
    },
    modalClosed: (state) => {
      state.type = "";
      state.data = null;
    },
  },
});

export const { modalOpened, modalClosed } = modalSlice.actions;
export default modalSlice.reducer;

export const openModal = (payload: ModalProps) => async (dispatch: Dispatch) => dispatch(modalOpened(payload));

export const closeModal = () => async (dispatch: Dispatch) => dispatch(modalClosed());

const modalSelector = (state) => state.modals;

export const selectModal: OutputSelector<
  ModalProps,
  ModalProps,
  (res: ModalProps) => ModalProps
> = createSelector(modalSelector, (props) => ({ ...props }));
