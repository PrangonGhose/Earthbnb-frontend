import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './house/house';
import reservationsReducer from './reservation/reservation';
import navbarSlice from './navBar/navbar';

const store = configureStore({
  reducer: {
    houses: housesReducer,
    reservations: reservationsReducer,
    navbar: navbarSlice,
  },
});

export default store;
