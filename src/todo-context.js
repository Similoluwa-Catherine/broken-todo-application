import React, { useState } from 'react';
import { todosTemplate } from './components/todo-list/todo-template';

export const TodosContext = React.createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(todosTemplate);
  const [completedTasks, setCompletedTasks] = useState(0);

  const addTask = (newTask) => {
    setTasks([...tasks,
      {
        id: tasks.length + 1,
        label: newTask,
        checked: false,
      },
    ]);
  };

  const removeTask = (id) => {
    const existingItem = tasks.find(
      (item) => item.id === id,
    );

    if (existingItem) {
      const newItems = tasks.filter(
        (item) => item.id !== id,
      );
      setTasks(newItems);
    }
  };

  const countCompletedTasks = () => {
    const completedItems = tasks.filter((item) => item.checked === true);
    setCompletedTasks(completedItems.length);
  };

  const todoContext = {
    tasks,
    addTask,
    removeTask,
    completedTasks,
    countCompletedTasks,
  };

  return (
    <TodosContext.Provider value={todoContext}>
      {children}
    </TodosContext.Provider>
  );
};
