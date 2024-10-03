import { useState } from "react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api2024.mksolusi.id/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Cek jika login berhasil (status = 0)
      if (data.status === 0) {
        alert("Login successful!");
        window.location.href = "/admin/user-profile";
        // Simpan api_token, username, dan fullname ke localStorage
        localStorage.setItem("id", data.userdata.id);
        localStorage.setItem("api_token", data.userdata.api_token);
        localStorage.setItem("username", data.userdata.username);
        localStorage.setItem("fullname", data.userdata.detail.fullname);
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while logging in. Please try again.");
      console.error("Error during login:", error);
    }
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
            {errorMessage && (
              <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
            )}
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
