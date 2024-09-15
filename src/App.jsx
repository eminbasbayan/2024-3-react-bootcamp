import { Toaster } from "react-hot-toast";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { fetchProducts } from "./redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
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
