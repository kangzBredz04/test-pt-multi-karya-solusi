import React from "react";

export default function SalesReport() {
  const salesData = [
    {
      id: 1,
      product: "Product A",
      customer: "John Doe",
      quantity: 3,
      date: "2024-10-01",
    },
    {
      id: 2,
      product: "Product B",
      customer: "Jane Smith",
      quantity: 1,
      date: "2024-10-02",
    },
    // Tambahkan data penjualan lainnya di sini
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Sales Report</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Product</th>
            <th className="py-2 px-4 border-b">Customer</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td className="py-2 px-4 border-b">{sale.id}</td>
              <td className="py-2 px-4 border-b">{sale.product}</td>
              <td className="py-2 px-4 border-b">{sale.customer}</td>
              <td className="py-2 px-4 border-b">{sale.quantity}</td>
              <td className="py-2 px-4 border-b">{sale.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
