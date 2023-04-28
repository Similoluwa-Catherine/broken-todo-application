import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const {
    tasks, removeTask, countCompletedTasks,
  } = React.useContext(TodosContext);
  const [checked, setChecked] = React.useState(false);

  const handleDelete = (id) => {
    removeTask(id);
  };

  const toggleCheck = (id) => {
    const checkedItem = tasks.find((task) => id === task.id);
    setChecked(!checked);
    if (checkedItem) {
      checkedItem.checked = checked;
    }

    countCompletedTasks();
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {tasks ? (
        <div className="todo-list-content">
          {tasks.map((task) => (
            <Checkbox
              key={task.id}
              label={task.label}
              checked={task.checked}
              onClick={() => toggleCheck(task.id)}
              onKeyUp={(e) => handleKeyUp(e, task.id)}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
