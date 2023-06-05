import { configureStore } from '@reduxjs/toolkit';
import  todoReducer  from '../features/ToDoWithReduxToolkit/ToDoSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo:todoReducer
  },
});
