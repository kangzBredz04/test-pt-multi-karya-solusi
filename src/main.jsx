import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import CustomerDashboard from "./pages/CustomerDashboard.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import ProductMaster from "./pages/ProductMaster.jsx";
import Home from "./pages/Home.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx"; // Import the AuthLayout

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
    element: <AuthLayout />, // Use AuthLayout for authentication routes
    children: [
      {
        path: "/login",
        element: <Login />,
        title: "Login",
      },
    ],
  },
  {
    element: <App />, // Main app layout with header and footer
    children: [
      {
        path: "/",
        element: <Home />,
        title: "Home",
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
      {
        path: "/product-master",
        element: <ProductMaster />,
        title: "Product Master",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
