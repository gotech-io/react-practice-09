import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { selectFilters } from './filterSlice';
import api from './api';

const todosAdapter = createEntityAdapter();

// Initial state
const initialState = todosAdapter.getInitialState({});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      todosAdapter.setAll(state, action.payload);
    });
    builder.addCase(postNewTodo.fulfilled, (state, action) => {
      todosAdapter.addOne(state, action.payload);
    });
    builder.addCase(patchTodo.fulfilled, (state, action) => {
      todosAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      todosAdapter.removeOne(state, action.meta.arg);
    });
  },
});

// Thunks
const getTodos = createAsyncThunk('todos/getTodos', async () => {
  return await api.readItems();
});

const postNewTodo = createAsyncThunk('todos/postNewTodo', async (title) => {
  const newTodo = {
    title,
    isCompleted: false,
  };

  return await api.createItem(newTodo);
});

const patchTodo = createAsyncThunk(
  'todos/patchTodo',
  async ({ id, changes }) => {
    return await api.updateItem(id, changes);
  }
);

const deleteTodo = createAsyncThunk('todos/deleteTodos', async (id) => {
  return await api.deleteItem(id);
});

// Memoized selectors
const selectors = todosAdapter.getSelectors((state) => state.todos);
const selectTodoEntities = selectors.selectEntities;
const selectTodos = selectors.selectAll;
const selectToDoById = selectors.selectById;

const selectFilteredTodos = createSelector(
  selectTodos,
  selectFilters,
  (todos, filters) => {
    if (filters.showCompleted) {
      return todos;
    }

    return todos.filter((todo) => !todo.isCompleted);
  }
);

export {
  getTodos,
  postNewTodo,
  patchTodo,
  deleteTodo,
  selectTodoEntities,
  selectToDoById,
  selectFilteredTodos,
};

export default todosSlice.reducer;
