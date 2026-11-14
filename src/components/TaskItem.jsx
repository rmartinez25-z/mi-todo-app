import React from 'react';

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text" onClick={() => toggleTask(task.id)}>
        {task.text}
      </span>
      <div className="task-actions">
        <button 
          className="toggle-btn" 
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button 
          className="delete-btn" 
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}