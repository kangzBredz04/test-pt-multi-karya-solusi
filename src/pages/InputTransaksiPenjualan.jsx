import { useState, useEffect } from "react";

export default function InputTransaksiPenjualan() {
  const [transactionNumber, setTransactionNumber] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [items, setItems] = useState([{ id: "", qty: "", discount: 0 }]);
  const [customers, setCustomers] = useState([]);
  const [itemsData, setItemsData] = useState([]);

  // Fetch customers from API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const apiToken = localStorage.getItem("api_token");
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
        setCustomers(data); // Assuming data is in the expected format
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  // Fetch items from API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const apiToken = localStorage.getItem("api_token");
        const response = await fetch(
          "https://api2024.mksolusi.id/api/master/item/index",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }

        const data = await response.json();
        setItemsData(data); // Assuming data is in the expected format
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleAddItem = () => {
    setItems([...items, { id: "", qty: "", discount: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transactionData = {
      transaction_number: transactionNumber,
      customer: 1,
      items: items.map((item) => ({
        id: Number(item.id),
        qty: Number(item.qty),
        discount: Number(item.discount),
      })),
    };

    try {
      const apiToken = localStorage.getItem("api_token");

      const response = await fetch(
        "https://api2024.mksolusi.id/api/transaction/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          body: JSON.stringify(transactionData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Transaksi berhasil disimpan");
      // Reset form setelah berhasil submit
      setTransactionNumber("");
      setCustomerId("");
      setItems([{ id: "", qty: "", discount: 0 }]);
    } catch (error) {
      console.error("Error saving transaction:", error);
      alert("Error saving transaction. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-5">
      <h1 className="text-3xl font-bold mb-5">Input Transaksi Penjualan</h1>
      <form
        className="w-full bg-white shadow-md rounded px-8 py-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="transactionNumber"
          >
            Transaction Number
          </label>
          <input
            type="text"
            id="transactionNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={transactionNumber}
            onChange={(e) => setTransactionNumber(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="customerId"
          >
            Customer
          </label>
          <select
            id="customerId"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          >
            <option value="">Select a customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.detail?.fullname}
              </option>
            ))}
          </select>
        </div>

        <h2 className="text-xl font-bold mb-4">Items</h2>
        {items.map((item, index) => (
          <div key={index} className="flex mb-4 items-center">
            <select
              placeholder="Item ID"
              className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              value={item.id}
              onChange={(e) => handleItemChange(index, "id", e.target.value)}
              required
            >
              <option value="">Select an item</option>
              {itemsData.map((itemData) => (
                <option key={itemData.id} value={itemData.id}>
                  {itemData.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Quantity"
              className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              value={item.qty}
              onChange={(e) => handleItemChange(index, "qty", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Discount"
              className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={item.discount}
              onChange={(e) =>
                handleItemChange(index, "discount", e.target.value)
              }
            />
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleAddItem}
          >
            Add Item
          </button>
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
