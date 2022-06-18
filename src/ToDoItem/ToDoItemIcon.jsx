import styled from '@emotion/styled/macro';
import { useToDoItemContext } from './ToDoItemProvider';

const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const ToDoItemIcon = () => {
  const { onItemClick } = useToDoItemContext();
  return <Icon onClick={onItemClick}>{'>'}</Icon>;
};

export default ToDoItemIcon;
