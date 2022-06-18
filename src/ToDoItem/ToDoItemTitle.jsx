import styled from '@emotion/styled/macro';
import { useToDoItemContext } from './ToDoItemProvider';

const Title = styled.div`
  flex-grow: 0;
  padding: 0 8px;
`;

const ToDoItemTitle = () => {
  const { todo } = useToDoItemContext();
  return <Title>{todo.title}</Title>;
};

export default ToDoItemTitle;
