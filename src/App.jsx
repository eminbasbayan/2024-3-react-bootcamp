import { Toaster } from "react-hot-toast";
import CategoryManagement from "./components/Firebase/CategoryManagement";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { fetchProducts } from "./redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
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
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
