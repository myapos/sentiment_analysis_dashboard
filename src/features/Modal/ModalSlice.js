import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    show: true,
    body: "test",
    title: "bodytest",
    onSaveText: "yes",
    onCloseText: "no",
  },
  reducers: {
    saveModal: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state = action.payload;
    },
    showModal: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.show = action.payload;
    },
  },
});

export const { saveModal, showModal } = ModalSlice.actions;

export const selectShowModal = (state) => state.modal.showModal;
export const selectModal = (state) => state.modal;

export default ModalSlice.reducer;
