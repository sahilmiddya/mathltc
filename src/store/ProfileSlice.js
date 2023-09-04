import { createSlice } from "@reduxjs/toolkit";

const profileslice = createSlice({
  name: "profiledetails",
  initialState: {
    user: null,
    wardrobeModalOpen: false,
    openDeleteModal: false,
  },
  reducers: {
    userprofile: (state, action) => {
      state.user = action.payload;
    },
    setWardrobeModalOpen: (state) => {
      state.wardrobeModalOpen = !state.wardrobeModalOpen;
    },

    setDeleteModal: (state, action) => {
      state.openDeleteModal = !state.openDeleteModal;
    },
  },
});

export const { userprofile, setWardrobeModalOpen, setDeleteModal } =
  profileslice.actions;

export default profileslice.reducer;
