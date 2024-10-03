import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow sticky top-0 z-50">
      <div className="flex items-center"></div>
      <div className="flex items-center space-x-4">
        <Link
          to={"/admin/user-profile"}
          className="flex items-center space-x-2"
        >
          <img
            src="https://placehold.co/32x32"
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-800">
            {localStorage.getItem("fullname")}
          </span>
          <i className="fas fa-chevron-down text-gray-600"></i>
        </Link>
      </div>
    </div>
  );
}
