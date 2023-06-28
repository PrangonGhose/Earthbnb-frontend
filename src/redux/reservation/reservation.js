import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async (user) => {
    const response = await axios({
      method: 'get',
      url: `https://earthbnb-1n7m.onrender.com/reservations/${user.username}`,
    });

    return response.data;
  },
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.fulfilled, (state, action) => (action.payload));
  },
});

export const reservationsActions = reservationsSlice.actions;
export default reservationsSlice.reducer;
