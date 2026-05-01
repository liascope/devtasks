import React from 'react';
import { Link } from 'react-router-dom';

const AddTasks = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-8">
      <Link to="/dashboard" className="text-sm font-bold hover:underline mb-8 inline-block">← Back to Dashboard</Link>
      <div className="max-w-md mx-auto mt-20">
        <h1 className="text-3xl font-black mb-8 uppercase tracking-tighter">Add New Task</h1>
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Task Name</label>
            <input 
              type="text" 
              placeholder="Enter task description..." 
              className="w-full border-2 border-gray-100 rounded-lg px-4 py-3 focus:border-black outline-none transition-all"
            />
          </div>
          <button className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTasks;
