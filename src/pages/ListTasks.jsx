import React from 'react';
import { Link } from 'react-router-dom';

const ListTasks = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-8">
      <Link to="/dashboard" className="text-sm font-bold hover:underline mb-8 inline-block">← Back to Dashboard</Link>
      <div className="max-w-2xl mx-auto mt-20">
        <h1 className="text-3xl font-black mb-8 uppercase tracking-tighter">Your Tasks</h1>
        <div className="space-y-3">
          {[
            { id: 1, text: "Finalize monochrome design system", status: "active" },
            { id: 2, text: "Implement React Router navigation", status: "completed" },
            { id: 3, text: "Audit project performance", status: "active" },
          ].map((task) => (
            <div key={task.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-all group">
              <div className="flex items-center space-x-4">
                <div className={`w-2 h-2 rounded-full ${task.status === 'active' ? 'bg-black animate-pulse' : 'bg-gray-200'}`}></div>
                <span className={task.status === 'completed' ? 'line-through text-gray-400' : 'font-medium'}>{task.text}</span>
              </div>
              <button className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-black transition-all">✕</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTasks;
