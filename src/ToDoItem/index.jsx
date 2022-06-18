import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import ToDoItemProvider from './ToDoItemProvider';
import ToDoItemCheckbox from './ToDoItemCheckbox';
import ToDoItemTitle from './ToDoItemTitle';
import ToDoItemInputTitle from './ToDoItemInputTitle';
import ToDoItemIcon from './ToDoItemIcon';

const ToDoItem = ToDoItemProvider;
ToDoItem.Checkbox = ToDoItemCheckbox;
ToDoItem.Title = ToDoItemTitle;
ToDoItem.InputTitle = ToDoItemInputTitle;
ToDoItem.Icon = ToDoItemIcon;

const FlexSpacer = styled.div`
  flex-grow: 1;
`;

const ToDoItemComponent = ({ todo, onChange }) => {
  return (
    <ToDoItem todo={todo} onChange={onChange}>
      <ToDoItem.Checkbox />
      <ToDoItem.InputTitle />
      <FlexSpacer />
      <ToDoItem.Icon />
    </ToDoItem>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export { ToDoItem };
export default ToDoItemComponent;
