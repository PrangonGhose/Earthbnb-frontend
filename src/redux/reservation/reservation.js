import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async () => {
    let user = { id: '12345' };
    sessionStorage.setItem('user', user);
    user = sessionStorage.getItem('user');

    const response = await axios({
      method: 'get',
      url: 'http://localhost:3000/reservations',
      data: {
        user_id: user.id,
      },
    });

    return response.data;
  },
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: [
    {
      id: 1,
      house_id: 1,
      starting_date: '2022-05-03',
      ending_date: '2022-06-05',
    },
    {
      id: 2,
      house_id: 2,
      starting_date: '2022-07-03',
      ending_date: '2022-08-05',
    },
    {
      id: 3,
      house_id: 3,
      starting_date: '2022-05-03',
      ending_date: '2022-06-05',
    },
    {
      id: 4,
      house_id: 1,
      starting_date: '2022-09-03',
      ending_date: '2022-09-05',
    },
    {
      id: 5,
      house_id: 2,
      starting_date: '2022-09-03',
      ending_date: '2022-09-05',
    },
    {
      id: 6,
      house_id: 3,
      starting_date: '2022-09-03',
      ending_date: '2022-09-05',
    },
  ],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.fulfilled, (state, action) => (action.payload));
  },
});

export const reservationsActions = reservationsSlice.actions;
export default reservationsSlice.reducer;
