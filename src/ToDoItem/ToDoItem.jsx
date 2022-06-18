import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled from '@emotion/styled/macro';
import { useNavigate } from 'react-router-dom';

import { ThemeContext } from '../themeContext';
import Checkbox from '../Checkbox';

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

const Title = styled.div`
  flex-grow: 0;
  padding: 0 8px;
  cursor: pointer;
`;

const FlexSpacer = styled.div`
  flex-grow: 1;
`;

const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const ToDoItem = ({ todo, onChange }) => {
  const { theme } = useContext(ThemeContext);
  let navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/item/${todo.id}`, { state: { todo } });
  };

  return (
    <ToDoItemContainer theme={theme}>
      <Checkbox
        type="checkbox"
        checked={todo.isCompleted}
        onChange={(e) => onChange(todo.id, e.currentTarget.checked)}
      />
      <Title onDoubleClick={() => alert('Chnir')}>{todo.title}</Title>
      <FlexSpacer />
      <Icon onClick={handleClick}>{'>'}</Icon>
    </ToDoItemContainer>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

ToDoItem.defaultProps = {
  onChange: (id, newState) => {},
};

export default ToDoItem;
