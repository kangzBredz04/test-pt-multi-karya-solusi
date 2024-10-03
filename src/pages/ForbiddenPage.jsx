import { Link } from "react-router-dom";

export default function ForbiddenPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center font-KumbhSans">
      <h1 className="text-4xl font-bold text-black mb-4">403 Forbidden</h1>
      <p className="text-gray-600 mb-8">
        Maaf, Anda tidak memiliki akses untuk melihat halaman ini.
      </p>
      <Link
        to={"/login"}
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Harap Login Dahulu 🥱
      </Link>
    </div>
  );
}
