import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import TaskStats from './components/TaskStats';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React básico', completed: false },
    { id: 2, text: 'Crear la Mini To-Do App', completed: true },
  ]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>Mini To-Do App</h1>
        <TaskForm addTask={addTask} />
        <TaskFilter currentFilter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        <TaskStats tasks={tasks} />
      </div>
    </div>
  );
}