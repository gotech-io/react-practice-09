import { useState } from 'react';
import styled from '@emotion/styled/macro';
import { useToDoItemContext } from './ToDoItemProvider';

const Title = styled.div`
  flex-grow: 0;
  padding: 0 8px;
  cursor: pointer;
  user-select: none;
`;

const ToDoItemInputTitle = () => {
  const { todo, onItemChange } = useToDoItemContext();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const cancelChangeTitle = () => {
    setIsEditing(false);
  };

  const changeTitle = () => {
    setIsEditing(false);
    onItemChange({ title });
  };

  return (
    <Title onDoubleClick={() => setIsEditing(true)}>
      {!isEditing ? (
        todo.title
      ) : (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            type="text"
          />
          <button onClick={cancelChangeTitle}>Cancel</button>
          <button onClick={changeTitle}>Save</button>
        </>
      )}
    </Title>
  );
};

export default ToDoItemInputTitle;
