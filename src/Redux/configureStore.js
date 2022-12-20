import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import rocketsReducer from './Rockets/rocketsReducer';

const rocketRootReducer = combineReducers({
  rockets: rocketsReducer,
});

const store = configureStore({ reducer: rocketRootReducer }, applyMiddleware(ReduxThunk));

export default store;
