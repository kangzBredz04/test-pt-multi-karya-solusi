import { useEffect, useState } from "react";

// Fungsi untuk memformat angka menjadi Rupiah
const formatRupiah = (number) => {
  return number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Tidak menampilkan desimal
  });
};

export default function LaporanPenjualan() {
  const [transactions, setTransactions] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const apiToken = localStorage.getItem("api_token");
        const response = await fetch(
          "https://api2024.mksolusi.id/api/transaction/index",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiToken}`,
            },
            body: JSON.stringify({}),
          }
        );

        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

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
            body: JSON.stringify({}),
          }
        );

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchTransactions();
    fetchItems();
  }, []);

  // Fungsi untuk mendapatkan nama item berdasarkan ID
  const getItemNameById = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    return item ? item.name : "Unknown Item";
  };

  // Menghitung total penjualan
  const totalSales = transactions.reduce((total, transaction) => {
    const transactionTotal = transaction.sales_transactions.reduce(
      (subtotal, item) => subtotal + item.total_gross_price,
      0
    );
    return total + transactionTotal;
  }, 0);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">Laporan Penjualan</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b text-left">No Transaksi</th>
            <th className="py-2 px-4 border-b text-left">Waktu Transaksi</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Quantity</th>
            <th className="py-2 px-4 border-b text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.flatMap((transaction) =>
            transaction.sales_transactions.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">
                  {transaction.transaction_number}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(transaction.transaction_time).toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b">
                  {getItemNameById(item.item_id)}
                </td>
                <td className="py-2 px-4 border-b">{item.qty}</td>
                <td className="py-2 px-4 border-b">
                  {formatRupiah(item.total_gross_price)}
                </td>
              </tr>
            ))
          )}
        </tbody>
        {/* Baris untuk menampilkan total penjualan */}
        <tfoot>
          <tr className="bg-gray-200 font-bold">
            <td colSpan="4" className="py-2 px-4 border-t text-right">
              Total Penjualan:
            </td>
            <td className="py-2 px-4 border-t">{formatRupiah(totalSales)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
