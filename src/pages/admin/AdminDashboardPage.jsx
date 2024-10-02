import { Link } from "react-router-dom";
function AdminDashboardPage() {
  return (
    <div className="p-5 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="mb-6">
        Welcome to the admin dashboard! Manage your site using the links below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/admin/products"
          className="bg-blue-500 text-white p-4 rounded shadow"
        >
          Manage Products
        </Link>
        <Link
          to="/admin/orders"
          className="bg-green-500 text-white p-4 rounded shadow"
        >
          Manage Orders
        </Link>
        <Link
          to="/admin/users"
          className="bg-yellow-500 text-white p-4 rounded shadow"
        >
          Manage Users
        </Link>
      </div>
    </div>
  );
}
export default AdminDashboardPage;
