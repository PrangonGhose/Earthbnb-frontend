import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHouses = createAsyncThunk(
  'houses/getHouses',
  async () => {
    const respond = await axios.get('https://earthbnb-1n7m.onrender.com/houses/');
    return respond.data;
  },
);

export const getHousesById = createAsyncThunk(
  'houses/getHouseById',
  async (id) => {
    const respond = await axios.get(`https://earthbnb-1n7m.onrender.com/houses/${id}`);
    return respond.data;
  },
);

export const createHouse = createAsyncThunk(
  'houses/create',
  async (houseData) => {
    try {
      const response = await fetch('https://earthbnb-1n7m.onrender.com/houses', {
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
      .addCase(getHousesById.fulfilled, (state, action) => (action.payload));
  },
});

export const housesActions = housesSlice.actions;
export default housesSlice.reducer;
