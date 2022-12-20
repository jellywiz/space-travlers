import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './Missions/Missions';

const spaceReducer = combineReducers({
  Missions: missionsReducer,
});

const store = configureStore({
  reducer: spaceReducer,
});

export default store;
