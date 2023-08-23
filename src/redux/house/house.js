import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseApiUrl from '../../../server';

export const getHouses = createAsyncThunk(
  'houses/getHouses',
  async () => {
    const respond = await axios.get(`${baseApiUrl}/houses`);
    return respond.data;
  },
);

export const createHouse = createAsyncThunk(
  'houses/create',
  async (houseData) => {
    try {
      const response = await fetch(`${baseApiUrl}/houses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(houseData),
      });

      if (!response.ok) {
        throw new Error('Failed to create house');
      }

      const createdHouse = await response.json();

      return createdHouse;
    } catch (error) {
      throw new Error('Failed to create house');
    }
  },
);

const housesSlice = createSlice({
  name: 'houses',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.fulfilled, (state, action) => (action.payload))
  },
});

export const housesActions = housesSlice.actions;
export default housesSlice.reducer;
