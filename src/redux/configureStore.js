import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './house/house';
import reservationsReducer from './reservation/reservation';
import navbarSlice from './navBar/navbar';
import houseDetail from './house/houseDetail';

const store = configureStore({
  reducer: {
    houses: housesReducer,
    houseDetail,
    reservations: reservationsReducer,
    navbar: navbarSlice,
  },
});

export default store;
