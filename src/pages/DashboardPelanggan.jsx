import { useEffect } from "react";
import { useState } from "react";

export default function DashboardPelanggan() {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCustomers = async () => {
      const apiToken = localStorage.getItem("api_token");

      try {
        const response = await fetch(
          "https://api2024.mksolusi.id/api/master/user/index",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }

        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.detail.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShow = (id) => {
    // Implement show functionality
    console.log(`Show customer with id: ${id}`);
  };

  const handleUpdate = (id) => {
    // Implement update functionality
    console.log(`Update customer with id: ${id}`);
  };

  const handleDelete = async (id) => {
    const apiToken = localStorage.getItem("api_token");
    try {
      const response = await fetch(
        `https://api2024.mksolusi.id/api/master/user/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );

      if (response.ok) {
        // Remove deleted customer from state
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== id)
        );
      } else {
        throw new Error("Failed to delete customer");
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Customer List</h1>
      <input
        type="text"
        placeholder="Search by full name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />
      <table className="min-w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-200">
          <tr className="text-center">
            <th className="py-2 px-4 text-center text-gray-700 font-semibold">
              No
            </th>
            <th className="py-2 px-4 text-center text-gray-700 font-semibold">
              Full Name
            </th>
            <th className="py-2 px-4 text-center text-gray-700 font-semibold">
              Address
            </th>
            <th className="py-2 px-4 text-center text-gray-700 font-semibold">
              Phone Number
            </th>
            <th className="py-2 px-4 text-center text-gray-700 font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr
              key={customer.id}
              className="border-b hover:bg-gray-50 text-center"
            >
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{customer.detail.fullname}</td>
              <td className="py-2 px-4">{customer.detail.address}</td>
              <td className="py-2 px-4">{customer.detail.phone_number}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleShow(customer.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                >
                  Show
                </button>
                <button
                  onClick={() => handleUpdate(customer.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition mx-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(customer.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
