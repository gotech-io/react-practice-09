import { useEffect } from 'react';
import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';
import { useDispatch, useSelector } from 'react-redux';
import { patchTodo, postNewTodo, selectFilteredTodos } from './todoSlice';

const FetchToDoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  const handleChange = async (id, changes) => {
    dispatch(patchTodo({ id, changes }));
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
