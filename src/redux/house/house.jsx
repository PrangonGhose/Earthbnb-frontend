import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHouses = createAsyncThunk(
  'houses/getHouses',
  async () => {
    const respond = await axios.get('http://localhost:3000/api/greeting');
    return respond.data;
  },
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
      .addCase(getHouses.fulfilled, (state, action) => (action.payload));
  },
});

export const housesActions = housesSlice.actions;
export default housesSlice.reducer;
