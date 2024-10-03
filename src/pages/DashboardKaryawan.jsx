/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export default function DashboardKaryawan() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      const apiToken = localStorage.getItem("api_token");

      try {
        const response = await fetch(
          "https://api2024.mksolusi.id/api/master/user/index", // Assume this endpoint is for employees
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.detail.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShow = (id) => {
    const employee = employees.find((emp) => emp.id === id);
    setSelectedEmployee(employee);
    setIsPopupOpen(true);
  };

  const handleUpdate = (id) => {
    alert("Update feature not yet available.");
  };

  const handleDelete = async (id) => {
    const apiToken = localStorage.getItem("api_token");
    try {
      const response = await fetch(
        `https://api2024.mksolusi.id/api/master/employee/delete/${id}`, // Assume this endpoint is for employee deletion
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );

      if (response.ok) {
        // Remove deleted employee from state
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        );
      } else {
        throw new Error("Failed to delete employee");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Employee List</h1>
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
              Position
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
          {filteredEmployees.map((employee, index) => (
            <tr
              key={employee.id}
              className="border-b hover:bg-gray-50 text-center"
            >
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{employee.detail.fullname}</td>
              <td className="py-2 px-4">{employee.detail.position}</td>{" "}
              {/* Assuming 'position' field exists */}
              <td className="py-2 px-4">{employee.detail.phone_number}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleShow(employee.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                >
                  Show
                </button>
                <button
                  onClick={() => handleUpdate(employee.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition mx-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {selectedEmployee?.detail?.fullname}`s Details
            </h2>
            <p>
              <strong>Position: </strong>
              {selectedEmployee?.detail?.position}
            </p>
            <p>
              <strong>Phone: </strong>
              {selectedEmployee?.detail?.phone_number}
            </p>
            <button
              onClick={closePopup}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
