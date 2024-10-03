import AdminLayout from "../layouts/AdminLayout";
import { roleLoader } from "../loaders/roleLoader";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import OrderManagementPage from "../pages/admin/OrderManagementPage";
import ProductManagementPage from "../pages/admin/ProductManagementPage";
import UserManagementPage from "../pages/admin/UserManagementPage";

export const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  loader: ()=> roleLoader("admin"),
  children: [
    {
      path: "dashboard",
      element: <AdminDashboardPage />,
    },
    {
      path: "products",
      element: <ProductManagementPage />,
    },
    {
      path: "orders",
      element: <OrderManagementPage />,
    },
    {
      path: "users",
      element: <UserManagementPage />,
    },
  ],
};
