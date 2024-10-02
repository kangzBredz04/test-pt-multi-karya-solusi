import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";

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
        path: "/task",
        // element: <Task />,
        title: "Tugas",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
