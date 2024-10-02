import React from "react";

export default function EmployeeDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card Example */}
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            Task Management
          </h2>
          <p className="text-gray-600">View and manage your tasks.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
            View Tasks
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            Team Collaboration
          </h2>
          <p className="text-gray-600">Collaborate with your team members.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
            Team Chat
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Reports</h2>
          <p className="text-gray-600">Generate and view reports.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
