import { useState } from "react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for login can be added here
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full shadow-lg rounded-lg overflow-hidden">
        {/* Left side - Login Form */}
        <div className="w-1/2 bg-white py-12 px-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome back!
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Simplify your workflow and boost your productivity with our app. Get
            started now.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#17375e] hover:bg-[317375e] text-white font-semibold w-full py-3 rounded focus:outline-none focus:shadow-outline transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-center mt-6">
            <p className="text-sm text-gray-600">or continue with</p>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="bg-[#17375e] text-white p-3 rounded-full">
              <FaGoogle />
            </button>
            <button className="bg-[#17375e] text-white p-3 rounded-full">
              <FaApple />
            </button>
            <button className="bg-[#17375e] text-white p-3 rounded-full">
              <FaFacebookF />
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm mt-6">
            Not a member?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Register now
            </a>
          </p>
        </div>

        {/* Right side - Illustration */}
        <div className="w-1/2 bg-blue-100 p-8 flex items-center justify-center">
          <div>
            <img
              src="/Illustration.jpg"
              alt="Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
