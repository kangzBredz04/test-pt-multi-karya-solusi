import { useEffect, useState } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);

  // Logic for scrolling logos
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 100);
    }, 30); // Kecepatan scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Sticky Header */}

      {/* Banner Image */}
      <div className="relative w-full h-full">
        <img
          src="/home-1.png" // Ganti dengan path gambar yang sesuai
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Badges Section */}
      <section className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((badge) => (
          <div
            key={badge}
            className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow"
          >
            {/* Icon */}
            <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-icons"></i> {/* Icon contoh */}
            </div>
            {/* Title */}
            <h3 className="font-semibold text-lg">Badge Title {badge}</h3>
            {/* Content */}
            <p className="text-gray-600 mt-2">
              This is the content for badge {badge}.
            </p>
          </div>
        ))}
      </section>

      {/* Profile Section */}
      <section className="max-w-7xl mx-auto py-16 text-center">
        <div className="relative w-full h-64">
          <img
            src="https://mksolusi.id/wp-content/uploads/2019/07/working-freelancer-germany.jpeg"
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl font-bold mb-2">Profile</h2>
            <p className="text-white max-w-xl">
              PT Multi Karya Solusi is an Information Technology solutions
              company that includes Information Technology Consultation and
              Planning, Application System Development...
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Scrolling Logos Section */}
      <section className="py-16 bg-gray-200">
        <div className="relative overflow-hidden">
          <div
            className="flex space-x-8 absolute"
            style={{ transform: `translateX(-${offset}%)` }}
          >
            {[1, 2, 3, 4, 5].map((logo) => (
              <img
                key={logo}
                src={`https://mksolusi.id/wp-content/uploads/2019/07/pemda.png`} // Ganti dengan gambar logo
                alt={`https://mksolusi.id/wp-content/uploads/2019/07/pemda.png`}
                className="w-24 h-24 object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
