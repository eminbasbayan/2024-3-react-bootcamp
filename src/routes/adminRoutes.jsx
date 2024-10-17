/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import { roleLoader } from "../loaders/roleLoader";

const AdminLayout = React.lazy(() => import("../layouts/AdminLayout"));
const AdminDashboardPage = React.lazy(() =>
  import("../pages/admin/AdminDashboardPage")
);
const OrderManagementPage = React.lazy(() =>
  import("../pages/admin/OrderManagementPage")
);
const ProductManagementPage = React.lazy(() =>
  import("../pages/admin/ProductManagementPage")
);
const UserManagementPage = React.lazy(() =>
  import("../pages/admin/UserManagementPage")
);

// Lazy loading ile bileşenleri yükleme

export const adminRoutes = {
  path: "/admin",
  element: (
    <Suspense fallback={<div>Loading admin layout...</div>}>
      <AdminLayout />
    </Suspense>
  ),
  loader: () => roleLoader("admin"),
  children: [
    {
      path: "dashboard",
      element: (
        <Suspense fallback={<div>Loading admin dashboard...</div>}>
          <AdminDashboardPage />
        </Suspense>
      ),
    },
    {
      path: "products",
      element: (
        <Suspense fallback={<div>Loading admin products...</div>}>
          <ProductManagementPage />
        </Suspense>
      ),
    },
    {
      path: "orders",
      element: (
        <Suspense fallback={<div>Loading admin orders...</div>}>
          <OrderManagementPage />
        </Suspense>
      ),
    },
    {
      path: "users",
      element: (
        <Suspense fallback={<div>Loading admin orders...</div>}>
          <UserManagementPage />
        </Suspense>
      ),
    },
  ],
};
