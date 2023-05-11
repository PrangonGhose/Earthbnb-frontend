import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHouses = createAsyncThunk(
  'houses/getHouses',
  async () => {
    const respond = await axios.get('http://localhost:3000/houses/');
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
  }
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
  }
);

const housesSlice = createSlice({
  name: 'houses',
  initialState: [
    {
      id: 1,
      name: 'House num 1',
      address: 'address1',
      rooms: 30,
      beds: 4,
      pictures: 'https://media.istockphoto.com/id/1026205392/es/foto/exterior-casa-hermosa-de-lujo-en-el-crep%C3%BAsculo.jpg?s=2048x2048&w=is&k=20&c=H3KupFl3WhqpbofYaO4A99lRHSwaa2GEMncqaj2akwE=',
      price_by_night: 500,
      description: 'Luxury house asdf asdf asd fasd fasdf asdf sdf asdf asdf asdf asdf asd asdf asdf asd fqwer qwer',
    },
    {
      id: 2,
      name: 'House num 2',
      address: 'address2',
      rooms: 2,
      beds: 6,
      pictures: 'https://media.istockphoto.com/id/1026205392/es/foto/exterior-casa-hermosa-de-lujo-en-el-crep%C3%BAsculo.jpg?s=2048x2048&w=is&k=20&c=H3KupFl3WhqpbofYaO4A99lRHSwaa2GEMncqaj2akwE=',
      price_by_night: 502,
      description: 'Luxury house asdf asdf asd fasd fasdf asdf sdf asdf asdf asdf asdf asd asdf asdf asd fqwer qwer',
    },
    {
      id: 3,
      name: 'House num 3',
      address: 'address3',
      rooms: 33,
      beds: 3,
      pictures: 'https://media.istockphoto.com/id/1026205392/es/foto/exterior-casa-hermosa-de-lujo-en-el-crep%C3%BAsculo.jpg?s=2048x2048&w=is&k=20&c=H3KupFl3WhqpbofYaO4A99lRHSwaa2GEMncqaj2akwE=',
      price_by_night: 503,
      description: 'Luxury house asdf asdf asd fasd fasdf asdf sdf asdf asdf asdf asdf asd asdf asdf asd fqwer qwer',
    },
    {
      id: 4,
      name: 'House num 4',
      address: 'address4',
      rooms: 34,
      beds: 44,
      pictures: 'https://media.istockphoto.com/id/1026205392/es/foto/exterior-casa-hermosa-de-lujo-en-el-crep%C3%BAsculo.jpg?s=2048x2048&w=is&k=20&c=H3KupFl3WhqpbofYaO4A99lRHSwaa2GEMncqaj2akwE=',
      price_by_night: 504,
      description: 'Luxury house asdf asdf asd fasd fasdf asdf sdf asdf asdf asdf asdf asd asdf asdf asd fqwer qwer',
    },
  ],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.fulfilled, (state, action) => (action.payload))
      .addCase(deleteHouse.fulfilled, (state, action) => null)
  },
});

export const housesActions = housesSlice.actions;
export default housesSlice.reducer;
