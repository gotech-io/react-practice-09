import Checkbox from '../Checkbox';
import { useToDoItemContext } from './ToDoItemProvider';

const ToDoItemCheckbox = () => {
  const { todo, onItemChange } = useToDoItemContext();

  const changeChecked = (e) => {
    onItemChange({ isCompleted: e.currentTarget.checked });
  };

  return (
    <Checkbox
      type="checkbox"
      checked={todo.isCompleted}
      onChange={changeChecked}
    />
  );
};

export default ToDoItemCheckbox;
