import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import CustomerDashboard from "./pages/CustomerDashboard.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  bio: "Web Developer with a passion for building beautiful and functional websites.",
  phone: "123-456-7890",
  website: "www.johndoe.com",
  avatar: "https://via.placeholder.com/150",
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        // element: <Home />,
        title: "Beranda",
      },
      {
        path: "/login",
        element: <Login />,
        title: "Login",
      },
      {
        path: "/user-profile",
        element: <UserProfile user={user} />,
        title: "Tugas",
      },
      {
        path: "/customer-dashboard",
        element: <CustomerDashboard />,
        title: "Customer Dashboard",
      },
      {
        path: "/employee-dashboard",
        element: <EmployeeDashboard />,
        title: "Employee Dashboard",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
