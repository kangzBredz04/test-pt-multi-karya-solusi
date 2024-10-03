import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Home from "./pages/Home.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx"; // Import the AuthLayout
import Admin from "./pages/Admin.jsx";
import ForbiddenPage from "./pages/ForbiddenPage.jsx";
import InputDataBarang from "./pages/InputDataBarang.jsx";
import InputDataCustomer from "./pages/InputDataCustomer.jsx";
import InputTransaksiPenjualan from "./pages/InputTransaksiPenjualan.jsx";
import LaporanPenjualan from "./pages/LaporanPenjualan.jsx";
import DashboardPelanggan from "./pages/DashboardPelanggan.jsx";
import DashboardKaryawan from "./pages/DashboardKaryawan.jsx";

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
    element: <ForbiddenPage />,
    path: "/forbidden",
  },
  {
    element: <App />, // Main app layout with header and footer
    children: [
      {
        path: "/",
        element: <Home />,
        title: "Home",
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/user-profile",
        element: <UserProfile />,
        title: "User Profile",
      },
      {
        path: "/admin/dashboard-pelanggan",
        element: <DashboardPelanggan />,
        title: "Dashboard Pelanggan",
      },
      {
        path: "/admin/dashboard-karyawan",
        element: <DashboardKaryawan />,
        title: "Dashboard Karyawan",
      },
      {
        path: "/admin/input-data-barang",
        element: <InputDataBarang />,
        title: "Input Data Barang",
      },
      {
        path: "/admin/input-data-customer",
        element: <InputDataCustomer />,
        title: "Input Data Customer",
      },
      {
        path: "/admin/input-transaksi-penjualan",
        element: <InputTransaksiPenjualan />,
        title: "Input Transaksi Penjualan",
      },
      {
        path: "/admin/laporan-penjualan",
        element: <LaporanPenjualan />,
        title: "Laporan Penjualan",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
