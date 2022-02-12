import { configureStore } from '@reduxjs/toolkit';

import todoSlice from './todoSlice';
import filtersReducer from './filterSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
    filters: filtersReducer,
  },
});

export default store;
