import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { fetchProducts } from "./redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { auth } from "./firebaseConfig";
import { loginUser, logoutUser } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.product);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          loginUser({
            email: user.email,
          })
        );
      } else {
        dispatch(logoutUser());
      }
    });

    // clean-up function
    return () => unsubscribe();
  }, [dispatch]);

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
