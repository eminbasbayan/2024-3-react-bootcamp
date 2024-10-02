import { useState } from "react";

function ProductManagementPage() {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
  ]);

  return (
    <div className="p-5 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Product ID</th>
            <th className="py-2 px-4 border">Product Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border">{product.id}</td>
              <td className="py-2 px-4 border">{product.name}</td>
              <td className="py-2 px-4 border">${product.price}</td>
              <td className="py-2 px-4 border">
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Product
        </button>
      </div>
    </div>
  );
}
export default ProductManagementPage;
