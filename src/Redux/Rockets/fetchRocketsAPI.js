import { createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from './ROCKETS_URL';

const GET_ROCKETS = 'space-travlers/Rockets/GET_ROCKETS';
const fetchRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
});

export default fetchRockets;
