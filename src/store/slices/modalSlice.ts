import { createSelector, createSlice, Dispatch, OutputSelector } from "@reduxjs/toolkit";

interface DataProps {
  data: Object | null;
}

export interface ModalProps {
  type: string;
  props?: DataProps | null;
}

const initialState: ModalProps = {
  type: "",
  props: null,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    modalOpened: (state, action) => {
      const { type, props } = action.payload;
      state.type = type;
      state.props = props;
    },
    modalClosed: (state) => {
      state.type = "";
      state.props = null;
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
