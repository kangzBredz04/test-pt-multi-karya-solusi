import { useEffect } from "react";
import { useState } from "react";

export default function LaporanPenjualan() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const apiToken = localStorage.getItem("api_token"); 
        const response = await fetch(
          "https://api2024.mksolusi.id/api/transaction/index",
          {
            method: "POST", // Use POST method
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiToken}`,
            },
            body: JSON.stringify({}), // Include an empty body if needed
          }
        );
        const data = await response.json();
        console.log(data);

        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Laporan Penjualan</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b text-left">No Transaksi</th>
            <th className="py-2 px-4 border-b text-left">Waktu Transaksi</th>
            <th className="py-2 px-4 border-b text-left">Total Penjualan</th>
            <th className="py-2 px-4 border-b text-left">Detail Penjualan</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                {transaction.transaction_number}
              </td>
              <td className="py-2 px-4 border-b">
                {new Date(transaction.transaction_time).toLocaleString()}
              </td>
              <td className="py-2 px-4 border-b">
                {transaction.sales_transactions.reduce(
                  (total, item) => total + item.total_gross_price,
                  0
                )}
              </td>
              <td className="py-2 px-4 border-b">
                <ul>
                  {transaction.sales_transactions.map((item) => (
                    <li key={item.id}>
                      Item ID: {item.item_id}, Qty: {item.qty}, Total:{" "}
                      {item.total_gross_price}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
