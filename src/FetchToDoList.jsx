import { useEffect } from 'react';
import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodos,
  patchTodo,
  postNewTodo,
  selectFilteredTodos,
} from './todoSlice';

const FetchToDoList = ({ showCompleted }) => {
  const filteredTodos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async (id, newState) => {
    dispatch(patchTodo({ id, isCompleted: newState }));
  };

  const handleAdd = async (title) => {
    dispatch(postNewTodo(title));
  };

  return (
    <>
      <ToDoList todos={filteredTodos} onChange={handleChange} />
      <ToDoInput onAdd={handleAdd} />
    </>
  );
};

export default FetchToDoList;
