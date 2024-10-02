import React, { useState } from "react";
import { useEffect } from "react";
import { HiArrowUp, HiArrowDown } from "react-icons/hi"; // Pastikan untuk menginstal react-icons

const initialItems = [
  {
    id: 1,
    item_code: "ABC1",
    item_type_id: 1,
    name: "Chiki",
    stock: 20,
    price: 6000,
    item_type: {
      id: 1,
      name: "Snack",
    },
  },
  {
    id: 2,
    item_code: "XYZ2",
    item_type_id: 2,
    name: "Biskuit",
    stock: 50,
    price: 8000,
    item_type: {
      id: 2,
      name: "Biscuit",
    },
  },
  {
    id: 3,
    item_code: "DEF3",
    item_type_id: 1,
    name: "Keripik",
    stock: 30,
    price: 5000,
    item_type: {
      id: 1,
      name: "Snack",
    },
  },
  {
    id: 4,
    item_code: "GHI4",
    item_type_id: 3,
    name: "Susu",
    stock: 15,
    price: 12000,
    item_type: {
      id: 3,
      name: "Beverage",
    },
  },
  {
    id: 5,
    item_code: "JKL5",
    item_type_id: 2,
    name: "Kue",
    stock: 25,
    price: 10000,
    item_type: {
      id: 2,
      name: "Biscuit",
    },
  },
];

export default function ProductMaster() {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    id: null,
    item_code: "",
    name: "",
    stock: "",
    price: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });
  const [isModalVisible, setIsModalVisible] = useState(false); // State untuk kontrol modal

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Misalnya access_token ini sudah diperoleh dari login atau session.
        const access_token =
          "1Gbg1XxZ0smylrtt35KUOHaUALGzgQ8wM0bW76du9bf2BZqVucq9eGKTV2KrwRzIMFUzEElpCd8eL8A6"; // Ganti dengan token yang Anda dapatkan

        const response = await fetch(
          "https://api2024.mksolusi.id/api/master/item/index",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`, // Tambahkan access_token di sini
            },
            body: JSON.stringify({
              // Tambahkan body jika dibutuhkan
            }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          console.log(data);
          // setItems(data); // Set data yang diterima ke state items
        } else {
          console.error("Error fetching items:", data.message);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (isEditing) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === formData.id ? { ...formData } : item
        )
      );
    } else {
      setItems((prevItems) => [
        ...prevItems,
        { ...formData, id: Date.now() }, // Generate unique ID
      ]);
    }
    resetForm();
  };

  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
    setIsModalVisible(true); // Tampilkan modal saat mengedit
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({ id: null, item_code: "", name: "", stock: "", price: "" });
    setIsEditing(false);
    setIsModalVisible(false); // Sembunyikan modal saat reset
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Product Master</h2>
      <div className="mb-4 flex justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded py-2 px-3"
          />
          <span
            onClick={() => requestSort("name")}
            className="absolute right-2 top-2 cursor-pointer"
          >
            {sortConfig.key === "name" ? (
              sortConfig.direction === "ascending" ? (
                <HiArrowUp />
              ) : (
                <HiArrowDown />
              )
            ) : (
              <HiArrowUp />
            )}
          </span>
        </div>
        <button
          onClick={() => {
            resetForm();
            setIsModalVisible(true); // Tampilkan modal saat menekan Add Product
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>

      {/* Modal untuk menambah/merubah produk */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={resetForm}
          ></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-10">
            <h3 className="text-lg font-bold mb-2">
              {isEditing ? "Update Product" : "Add Product"}
            </h3>
            <form onSubmit={handleAddOrUpdate}>
              <div className="mb-2">
                <label className="block text-gray-700">Item Code</label>
                <input
                  type="text"
                  name="item_code"
                  value={formData.item_code}
                  onChange={handleInputChange}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  {isEditing ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="ml-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Item Code</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.length > 0 ? (
            sortedItems.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.item_code}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.stock}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-2 px-4 text-center">
                No items found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
