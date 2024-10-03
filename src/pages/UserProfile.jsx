/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();
  const [name, setName] = useState("Sara");
  const [fullName, setFullName] = useState("Tancredi");
  const [email, setEmail] = useState("ww4697175@gmail.com");
  const [phone, setPhone] = useState("087889387769");
  const [location, setLocation] = useState("Bandung, West Java");
  const [postalCode, setPostalCode] = useState("40175");

  useEffect(() => {
    const token = localStorage.getItem("api_token");
    if (!token) {
      navigate("/forbidden"); // Ganti "/forbidden" dengan path ke ForbiddenPage Anda
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-10">
        <div className="flex items-center mb-10">
          <div className="relative">
            <img
              src="https://placehold.co/100x100"
              alt="User profile picture"
              className="w-24 h-24 rounded-full"
            />
            <div className="absolute bottom-0 right-0 bg-blue-900 w-6 h-6 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-6">
            <div className="text-2xl font-bold">
              {localStorage.getItem("fullname")}
            </div>
            <div className="text-gray-500">{location}</div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                value={localStorage.getItem("username")}
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                value={localStorage.getItem("fullname")}
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                value={email}
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                value={phone}
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                value={location}
                disabled
                placeholder="e.g. New York, USA"
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                value={postalCode}
                disabled
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
