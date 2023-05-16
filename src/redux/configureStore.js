import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import housesReducer from './house/house';
import reservationsReducer from './reservation/reservation';
import navbarSlice from './navBar/navbar';

const store = configureStore({
  reducer: {
    houses: housesReducer,
    reservations: reservationsReducer,
    navbar: navbarSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
