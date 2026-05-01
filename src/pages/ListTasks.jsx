import React from 'react';

const ListTasks = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Task List</h1>
      <ul className="mt-4 list-disc pl-5">
        <li>Learn React basics</li>
        <li>Build UI design</li>
        <li>Finalize project</li>
      </ul>
    </div>
  );
};

export default ListTasks;
