export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Business Info</h3>
          <p>Office Representative:</p>
          <p>JDC Building 6th Floor, Jl. Gatot Subroto Kav. 53 Jakarta 10260</p>
          <p>Workshop:</p>
          <p>
            JL. Kafi II Komplek Mabad II, Kel.Srengseng Sawah Kec. Jagakarsa,
            Jakarta Selatan
          </p>
        </div>
        <div>
          <p>Email: info@mksolusi.id</p>
          <p>&copy; Multi Karya Solusi @2024 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
