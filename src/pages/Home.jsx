import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaCogs, FaTools } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";

const badges = [
  {
    id: 1,
    icon: <HiMiniComputerDesktop size={60} />, // Use appropriate icon class from Font Awesome
    title: "Software Development",
    content:
      "Custom Development, Integration, Data Migration & Enhancement & Mobile Application",
  },
  {
    id: 2,
    icon: <FaCogs size={60} />,
    title: "System Integration",
    content:
      "Data Center Consolidation, Network & Security & Server and Storage",
  },
  {
    id: 3,
    icon: <FaTools size={60} />,
    title: "Maintenance & Support",
    content:
      "Offsite Support Staffing, Onsite Support Staffing & Project Based Support",
  },
  {
    id: 4,
    icon: <FaSitemap size={60} />,
    title: "Network & Telecommunication",
    content:
      "We will help all the needs of network installation and preparation based on your needs, taking into account what is needed and what is more efficient.",
  },
];

export default function Home() {
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
      <section className="m-16 grid grid-cols-4 gap-8">
        {badges.map(({ id, icon, title, content }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center bg-white border border-gray-100 p-6 rounded-lg shadow"
          >
            {/* Icon */}
            <div className="bg-[#17375e] text-white p-4 rounded-full mb-4">
              {icon} {/* React Icon */}
            </div>
            {/* Title */}
            <h3 className="font-semibold text-lg">{title}</h3>
            {/* Content */}
            <p className="text-gray-600 mt-2">{content}</p>
          </div>
        ))}
      </section>

      {/* Profile Section */}
      <section className="max-w-7xl mx-auto py-4 text-center">
        <div className="relative w-full h-96">
          <img
            src="https://mksolusi.id/wp-content/uploads/2019/07/working-freelancer-germany.jpeg"
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl font-semibold mb-2">Profile</h2>
            {/* White border below the heading */}
            <div className="border-b border-white border-4 w-28 my-4"></div>
            {/* Adjust width as needed */}
            <p className="text-white max-w-xl">
              PT Multi Karya Solusi is an Information Technology solutions
              company that includes Information Technology Consultation and
              Planning, Application System Development, Integration of
              communication devices and networks as well as maintenance and
              repair of system devices with coverage in various fields in the
              public and private sectors.
            </p>
            <button className="mt-4 px-6 py-2 bg-[#17375e] text-white  hover:bg-blue-500 transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/*  Logos Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-2">Customers</h2>
            <div className="border-b border-[#17375e] border-2 w-24 mt-2 mb-10"></div>
          </div>
          <div className="flex justify-center items-center">
            {[
              {
                id: 1,
                urlImage:
                  "https://mksolusi.id/wp-content/uploads/2019/07/pemda.png",
                altText: "Jaya Raya",
              },
              {
                id: 2,
                urlImage:
                  "https://mksolusi.id/wp-content/uploads/2019/07/rindo.png",
                altText: "ReINDO",
              },
              {
                id: 3,
                urlImage:
                  "https://mksolusi.id/wp-content/uploads/2019/07/sulsel.png",
                altText: "Bank Sulsel",
              },
              {
                id: 4,
                urlImage:
                  "https://mksolusi.id/wp-content/uploads/2019/07/xxx.png",
                altText: "Pemkot Tebing",
              },
              {
                id: 5,
                urlImage:
                  "https://mksolusi.id/wp-content/uploads/2019/07/ita.png",
                altText: "ITA",
              },
              {
                id: 6,
                urlImage:
                  "https://mksolusi.id/wp-content/uploads/2019/07/linkfpx.png",
                altText: "Linfox",
              },
            ].map((logo) => (
              <img
                key={logo.id}
                src={logo.urlImage}
                alt={logo.altText}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
