import React from "react";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Customer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card Example */}
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">My Orders</h2>
          <p className="text-gray-600">View and manage your orders.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
            View Orders
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            Profile Settings
          </h2>
          <p className="text-gray-600">Manage your profile information.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
            Edit Profile
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Support</h2>
          <p className="text-gray-600">Need help? Contact support.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
}
