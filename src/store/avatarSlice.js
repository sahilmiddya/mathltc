// avatarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: true,
  animalList: [],
  humanList: [],
  showAnimals: false,
  showHumans: false,
  selectedImage: null,
};

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      const animals = action.payload.filter(item => item.avatar_type === 'animal');
      const humans = action.payload.filter(item => item.avatar_type === 'human');
      state.animalList = animals;
      state.humanList = humans;
    },
    setShowAnimals: (state) => {
      state.showAnimals = true;
      state.showHumans = false;
    },
    setShowHumans: (state) => {
      state.showAnimals = false;
      state.showHumans = true;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { setData, setShowAnimals, setShowHumans, setSelectedImage } = avatarSlice.actions;

export default avatarSlice.reducer;
