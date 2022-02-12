import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    showCompleted: true,
  },
  reducers: {
    showCompletedChanged(state, action) {
      state.showCompleted = action.payload;
    },
  },
});

const selectFilters = (state) => state.filters;
const { showCompletedChanged } = filtersSlice.actions;

export { selectFilters, showCompletedChanged };
export default filtersSlice.reducer;
