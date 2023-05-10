import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import housesReducer from './house/house';
import reservationsReducer from './reservation/reservation'

const store = configureStore({
  reducer: {
    houses: housesReducer,
    reservations: reservationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
