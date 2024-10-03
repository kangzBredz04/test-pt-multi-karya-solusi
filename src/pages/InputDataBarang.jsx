import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputDataBarang() {
  const [itemCode, setItemCode] = useState("");
  const [type, setType] = useState(1);
  const [name, setName] = useState("");
  const [stock, setStock] = useState(1);
  const [price, setPrice] = useState(5000);
  const [itemTypes, setItemTypes] = useState([]);

  useEffect(() => {
    // Fetch item types from the API using POST method
    const fetchItemTypes = async () => {
      const token = localStorage.getItem("api_token"); // Get the access token from localStorage

      try {
        const response = await fetch(
          "https://api2024.mksolusi.id/api/master/item_type/index",
          {
            method: "POST", // Change to POST
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Include the token in the header
            },
            body: JSON.stringify({}), // Include body if needed
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setItemTypes(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching item types:", error);
      }
    };

    fetchItemTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = {
      item_code: itemCode,
      type,
      name,
      stock,
      price,
    };

    try {
      const apiToken = localStorage.getItem("api_token"); // Mengambil token dari local storage

      const response = await fetch(
        "https://api2024.mksolusi.id/api/master/item/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`, // Menambahkan token ke header
          },
          body: JSON.stringify(itemData), // Mengirimkan itemData dalam bentuk JSON
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Data barang berhasil disimpan");

      // Mengosongkan input setelah berhasil menyimpan
      setItemCode(""); // Mengosongkan input itemCode
      setType(""); // Mengosongkan input type (atau setel ke nilai default)
      setName(""); // Mengosongkan input name
      setStock(0); // Mengosongkan input stock
      setPrice(0); // Mengosongkan input price
    } catch (error) {
      console.error("Error saving item:", error); // Menampilkan error jika terjadi
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("api_token");
    if (!token) {
      navigate("/forbidden"); // Ganti "/forbidden" dengan path ke ForbiddenPage Anda
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-5">
      <h1 className="text-3xl font-bold mb-5">Input Data Barang</h1>
      <form
        className="w-full bg-white shadow-md rounded px-8 py-6" // Removed max-w-md
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="itemCode"
          >
            Item Code
          </label>
          <input
            type="text"
            id="itemCode"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={itemCode}
            onChange={(e) => setItemCode(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="type"
          >
            Type
          </label>
          <select
            id="type"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            {itemTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
