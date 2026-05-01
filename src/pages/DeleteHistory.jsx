import React from 'react';
import { Link } from 'react-router-dom';

const DeleteHistory = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-8">
      <Link to="/dashboard" className="text-sm font-bold hover:underline mb-8 inline-block">← Back to Dashboard</Link>
      <div className="max-w-2xl mx-auto mt-20">
        <h1 className="text-3xl font-black mb-8 uppercase tracking-tighter text-red-600">Delete History</h1>
        <div className="bg-red-50 border border-red-100 p-6 rounded-2xl mb-8">
          <p className="text-red-800 text-sm font-semibold">
            Warning: This action will permanently remove all completed and archived tasks. This cannot be undone.
          </p>
        </div>
        <div className="space-y-4 opacity-50">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between p-4 border border-gray-100 rounded-xl">
              <div className="h-4 w-48 bg-gray-100 rounded animate-pulse"></div>
              <div className="h-4 w-12 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>
        <button className="mt-10 w-full py-4 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all uppercase tracking-widest text-xs">
          Clear Entire History
        </button>
      </div>
    </div>
  );
};

export default DeleteHistory;
