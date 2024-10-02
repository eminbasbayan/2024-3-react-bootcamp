import { useState } from "react";

function OrderManagementPage() {
  const [orders] = useState([
    { id: 1, customer: "John Doe", total: 200 },
    { id: 2, customer: "Jane Smith", total: 350 },
  ]);

  return (
    <div className="p-5 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Order ID</th>
            <th className="py-2 px-4 border">Customer</th>
            <th className="py-2 px-4 border">Total</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-2 px-4 border">{order.id}</td>
              <td className="py-2 px-4 border">{order.customer}</td>
              <td className="py-2 px-4 border">${order.total}</td>
              <td className="py-2 px-4 border">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default OrderManagementPage;
