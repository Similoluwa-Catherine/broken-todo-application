import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const {
    completedTasks, countCompletedTasks,
  } = React.useContext(TodosContext);

  const calculateChecked = () => {
    countCompletedTasks();
  };

  return (
    <div className="todo-results">
      Done:
      {`${''} ${completedTasks}`}
      {calculateChecked()}
    </div>
  );
};
