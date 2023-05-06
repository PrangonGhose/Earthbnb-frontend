import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import housesReducer from './house/house';

const store = configureStore({
  reducer: {
    houses: housesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
