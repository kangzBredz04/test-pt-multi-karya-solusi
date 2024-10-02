import React from "react";

export default function UserProfile({ user }) {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        User Profile
      </h2>
      <div className="flex items-center mb-4">
        <img
          src={user.avatar || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4 pt-4">
        <h4 className="text-lg font-bold text-gray-800">About Me</h4>
        <p className="text-gray-600">{user.bio || "No bio available."}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-bold text-gray-800">Contact Information</h4>
        <ul className="list-disc list-inside text-gray-600">
          <li>Phone: {user.phone || "N/A"}</li>
          <li>Website: {user.website || "N/A"}</li>
        </ul>
      </div>
    </div>
  );
}
