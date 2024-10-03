import MainLayout from "../layouts/MainLayout";
import { productLoader } from "../loaders/productLoader";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export const mainRoutes = {
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
      element: <ProductDetailsPage />,
      loader: productLoader
    },
  ],
};
