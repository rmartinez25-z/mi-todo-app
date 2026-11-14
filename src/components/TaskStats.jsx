import React from 'react';

export default function TaskStats({ tasks }) {
  const pendingCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="task-stats">
      <span>Quedan {pendingCount} tareas pendientes</span>
    </div>
  );
}