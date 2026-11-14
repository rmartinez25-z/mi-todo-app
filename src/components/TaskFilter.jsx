import React from 'react';

export default function TaskFilter({ currentFilter, setFilter }) {
  return (
    <div className="task-filter">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        Todas
      </button>
      <button
        className={currentFilter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Pendientes
      </button>
      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completadas
      </button>
    </div>
  );
}