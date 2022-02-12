import FetchToDoList from './FetchToDoList';
import CompletedToggle from './CompletedToggle';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, showCompletedChanged } from './filterSlice';

const ToDoListPage = () => {
  const { showCompleted } = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <>
      <CompletedToggle
        text="Show Completed"
        initialState={showCompleted}
        onChange={(checked) => dispatch(showCompletedChanged(checked))}
      />
      <FetchToDoList showCompleted={showCompleted} />
    </>
  );
};

export default ToDoListPage;
