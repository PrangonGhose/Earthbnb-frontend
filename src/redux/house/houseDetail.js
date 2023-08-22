import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHouseById = createAsyncThunk(
  'houseDetail/getHouseById',
  async (id) => {
    const respond = await axios.get(`http://localhost:3000/houses/${id}`);
    return respond.data;
  },
);

const houseDetailSlice = createSlice({
  name: 'houseDetail',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHouseById.fulfilled, (state, action) => (action.payload));
  },
});

export const houseActions = houseDetailSlice.actions;
export default houseDetailSlice.reducer;
