import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { fetchProducts } from "./redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import OrderManagementPage from "./pages/admin/OrderManagementPage";
import UserManagementPage from "./pages/admin/UserManagementPage";

function App() {
  const router = createBrowserRouter([
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

  const dispatch = useDispatch();
  const { loading, productData } = useSelector((state) => state.product);

  console.log(loading);
  console.log(productData);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, loading]);

  return (
    <div className="app container mx-auto">
      <Toaster />

      <div className="content mt-5">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
