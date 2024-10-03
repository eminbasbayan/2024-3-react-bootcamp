import { signOut } from "firebase/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await signOut(auth);
      toast.success("Başarıyla çıkış yaptınız!");
      dispatch(logoutUser());
      navigate("/auth/login");
    } catch (error) {
      toast.error("Çıkış işlemi sırasında hata oluştu!");
      console.log("Logout error:", error);
    }
  }

  return (
    <div className="admin-layout">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <nav>
            <Link to="/" className="text-gray-200 hover:text-white px-4">
              Home
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-200 hover:text-white px-4"
            >
              Logout
            </button>
          </nav>
        </header>
        {/* Main Layout: Sidebar + Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 text-gray-200 p-4">
            <nav className="space-y-2">
              <Link
                to="/admin/dashboard"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Dashboard
              </Link>
              <Link
                to="/admin/products"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Manage Products
              </Link>
              <Link
                to="/admin/orders"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Manage Orders
              </Link>
              <Link
                to="/admin/users"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Manage Users
              </Link>
            </nav>
          </aside>
          {/* Content Area */}
          <main className="flex-1 bg-gray-100 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
