import { FaUser, FaUsers, FaCubes, FaChartLine } from "react-icons/fa";
import { FaIdBadge, FaCashRegister } from "react-icons/fa6";
import { ImAddressBook } from "react-icons/im";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-1/5 bg-white p-6 border-r border-gray-200">
      <div className="text-2xl font-bold mb-8">Dashboard Admin</div>
      <nav className="space-y-8">
        <Link
          to={"/admin/user-profile"}
          className="flex items-center text-gray-600 hover:text-black gap-2"
        >
          <FaUser size={20} />
          <span>Info User</span>
        </Link>
        <Link
          to={"/admin/dashboard-pelanggan"}
          className="flex items-center text-gray-600 hover:text-black gap-2"
        >
          <FaUsers size={20} />
          <span>Dashboard Pelanggan</span>
        </Link>
        <a
          href="/admin/dashboard-karyawan"
          className="flex items-center text-gray-600 hover:text-black gap-2"
        >
          <FaIdBadge size={20} />
          <span>Dashboard Karyawan</span>
        </a>
        <a
          href="/admin/input-data-barang"
          className="flex items-center text-gray-600 hover:text-black gap-2"
        >
          <FaCubes size={20} />
          <span>Input Data Barang</span>
        </a>
        <a
          href="/admin/input-data-customer"
          className="flex items-center text-gray-600 hover:text-black gap-2"
        >
          <ImAddressBook size={20} />
          <span>Input Data Pelanggan</span>
        </a>
        <a
          href="/admin/input-transaksi-penjualan"
          className="flex items-center text-gray-600 hover:text-black gap-2"
        >
          <FaCashRegister size={20} />
          <span>Input Transaksi Penjualan</span>
        </a>
        <a
          href="/admin/laporan-penjualan"
          className="flex items-center text-gray-600 hover:text-black gap-2"
        >
          <FaChartLine size={20} />
          <span>Laporan Penjualan</span>
        </a>
      </nav>
      <div className="mt-8">
        <Link
          to={"/login"}
          onClick={() => localStorage.removeItem("api_token")}
          className="flex items-center text-red-600 hover:text-red-800 gap-2"
        >
          <RiLogoutCircleLine size={20} />
          <span>Log out</span>
        </Link>
      </div>
    </aside>
  );
}
