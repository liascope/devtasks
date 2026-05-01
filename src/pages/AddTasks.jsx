import React from 'react';

const AddTasks = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Add New Task</h1>
      <div className="mt-4">
        <input type="text" placeholder="Task description..." className="border p-2 w-full" />
        <button className="bg-blue-500 text-white p-2 mt-2 w-full">Add</button>
      </div>
    </div>
  );
};

export default AddTasks;
