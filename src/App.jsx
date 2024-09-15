import { Toaster } from "react-hot-toast";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { fetchProducts } from "./redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    }
  ])

  const dispatch = useDispatch();
  const {loading, productData} = useSelector((state) => state.product);

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
      <Header />
      <div className="content mt-5">
        <RouterProvider router={router} />
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
