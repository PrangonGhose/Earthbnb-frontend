import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isNavbarVisible: true,
  },
  reducers: {
    showNavbar: (state) => {
      const prevState = state;
      prevState.isNavbarVisible = true;
    },
    hideNavbar: (state) => {
      const prevState = state;
      prevState.isNavbarVisible = false;
    },
    toggleNavbar: (state) => {
      const prevState = state;
      prevState.isNavbarVisible = !state.isNavbarVisible;
    },
  },
});

export const { showNavbar, hideNavbar, toggleNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
