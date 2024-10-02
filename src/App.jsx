import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { fetchProducts } from "./redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);

  console.log(auth);

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
