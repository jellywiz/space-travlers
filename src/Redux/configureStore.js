import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import missionsReducer from './Missions/Missions';
import rocketsReducer from './Rockets/rocketsReducer';

const rocketRootReducer = combineReducers({
  Missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = configureStore({ reducer: rocketRootReducer }, applyMiddleware(ReduxThunk));

export default store;
