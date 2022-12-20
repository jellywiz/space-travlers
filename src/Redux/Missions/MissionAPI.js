import { createAsyncThunk } from '@reduxjs/toolkit';

import GET_MISSIONS from '../Actions';

const URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export default fetchMissions;
