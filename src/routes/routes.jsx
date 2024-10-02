import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import ProductManagementPage from "../pages/admin/ProductManagementPage";
import OrderManagementPage from "../pages/admin/OrderManagementPage";
import UserManagementPage from "../pages/admin/UserManagementPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetailsPage/>
        }
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboardPage />
        },
        {
          path: "products",
          element: <ProductManagementPage />
        },
        {
          path: "orders",
          element: <OrderManagementPage />
        },
        {
          path: "users",
          element: <UserManagementPage />
        }
      ]
    }
  ]);