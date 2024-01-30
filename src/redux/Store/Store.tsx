// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../Reducer/Reducer';
import { combineReducers } from 'redux'; // Import from 'redux' instead of '@reduxjs/toolkit'

const rootReducer = combineReducers({
  counter: counterReducer,
//   todoList: todoList, // Assuming you want to use 'todo' as the key for the todoList reducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;