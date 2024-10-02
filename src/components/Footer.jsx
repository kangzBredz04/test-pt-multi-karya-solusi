import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#262626] text-white py-12 px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
          <div>
            <h3 className="text-lg font-semibold mb-3">Business Info</h3>
            <div className="flex gap-4 text-[#777777]">
              <FaMapMarkerAlt className="mt-1" />
              <div>
                <p>Office Representative:</p>
                <p>
                  JDC Building 6th Floor, Jl. Gatot Subroto Kav. 53 Jakarta
                  10260
                </p>
                <p>Workshop:</p>
                <p>
                  JL. Kafi II Komplek Mabad II, Kel.Srengseng Sawah Kec.
                  Jagakarsa, Jakarta Selatan
                </p>
              </div>
            </div>
            <div className="flex gap-3 text-[#777777]">
              <MdEmail className="mt-1" />
              <div>
                <p>Email: info@mksolusi.id</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-between bg-[#222222] text-[#777777] px-20 py-5">
        <p>Copyright Multi Karya Solusi @2024 - All Rights Reserved</p>
        <div className="flex gap-6">
          <p>Home</p>
          <p>About</p>
        </div>
      </div>
    </>
  );
}
