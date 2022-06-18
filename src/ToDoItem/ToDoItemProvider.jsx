import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import styled from '@emotion/styled/macro';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../themeContext';

const ToDoItemContext = createContext({});
const useToDoItemContext = () => {
  const context = useContext(ToDoItemContext);
  if (!context) {
    throw new Error(
      'useToDoItemContext must be used within a ToDoItemProvider'
    );
  }
  return context;
};

const ToDoItemContainer = styled.li`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  padding: 8px 12px;
  color: ${({ theme }) => theme.textColor};

  :first-of-type {
    border-top: none;
  }
`;

const ToDoItemProvider = ({ todo, onChange, onTitleChange, children }) => {
  const { theme } = useContext(ThemeContext);
  let navigate = useNavigate();

  const onItemClick = () => {
    navigate(`/item/${todo.id}`, { state: { todo } });
  };

  const onItemChange = (changes) => {
    onChange(todo.id, changes);
  };

  return (
    <ToDoItemContext.Provider
      value={{
        todo,
        theme,
        onItemClick,
        onItemChange,
      }}
    >
      <ToDoItemContainer theme={theme}>{children}</ToDoItemContainer>
    </ToDoItemContext.Provider>
  );
};

ToDoItemProvider.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
};

export { useToDoItemContext };
export default ToDoItemProvider;
