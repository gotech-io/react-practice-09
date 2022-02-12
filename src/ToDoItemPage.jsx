import { useEffect, useContext } from 'react';
import styled from '@emotion/styled/macro';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from './themeContext';
import Checkbox from './Checkbox';
import api from './api';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, patchTodo, selectToDoById } from './todoSlice';

const BackButton = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 14px;
  margin-bottom: 6px;
  text-decoration: underline;
  color: ${({ theme }) => theme.textColor};
`;

const ToDoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: ${({ theme }) => theme.textColor};
`;

const Title = styled.div`
  flex-grow: 1;
  padding: 0 8px;
`;

const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const ToDoItemPage = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const todoId = parseInt(params.itemId);

  const dispatch = useDispatch();
  const todo = useSelector((state) => selectToDoById(state, todoId));

  useEffect(() => {
    if (todo) {
      navigate(location.pathname, { replace: true, state: { todo: todo } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo]);

  const handleChange = async (e) => {
    dispatch(patchTodo({ id: todoId, isCompleted: e.currentTarget.checked }));
  };

  const handleDelete = async () => {
    await dispatch(deleteTodo(todoId));
    navigate('/');
  };

  return (
    <>
      <BackButton theme={theme} href={'/'}>
        {'<'} All Todos
      </BackButton>
      <ToDoItemContainer theme={theme}>
        {todo && (
          <>
            <Checkbox
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleChange}
            />
            <Title>{todo.title}</Title>
            <Icon onClick={handleDelete}>🗑</Icon>
          </>
        )}
      </ToDoItemContainer>
    </>
  );
};

export default ToDoItemPage;
