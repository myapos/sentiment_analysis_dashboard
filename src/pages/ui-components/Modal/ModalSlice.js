import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
    body: "",
    title: "",
    onSaveText: "yes",
    onCloseText: "no",
  },
  reducers: {
    showModal: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { showModal } = ModalSlice.actions;

export const selectModal = (state) => state.modal;

export default ModalSlice.reducer;
