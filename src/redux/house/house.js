import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHouses = createAsyncThunk(
  'houses/getHouses',
  async () => {
    const respond = await axios.get('http://localhost:3000/houses/');
    return respond.data;
  },
);

export const getHousesById = createAsyncThunk(
  'houses/getHouses',
  async (id) => {
    const respond = await axios.get(`http://localhost:3000/houses/${id}`);
    return respond.data;
  },
);

export const createHouse = createAsyncThunk(
  'houses/create',
  async (houseData) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/houses', {
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

export const deleteHouse = createAsyncThunk(
  'houses/delete',
  async (houseId) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/houses/${houseId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete house');
      }

      const deletedData = await response.json();

      return deletedData;
    } catch (error) {
      throw new Error('Failed to delete house');
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
      .addCase(deleteHouse.fulfilled, () => null);
  },
});

export const housesActions = housesSlice.actions;
export default housesSlice.reducer;
