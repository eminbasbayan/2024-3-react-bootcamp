import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Fragment, useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [firebaseError, setFirebaseError] = useState(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember_me: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Zorunlu alan!")
        .email("Geçerli bir e-mail giriniz!"),
      password: Yup.string()
        .required("Zorunlu alan!")
        .min(6, "Şifre en az 6 karakter olmalı!"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const { email, password } = values;
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log(user);

        dispatch(loginUser({ ...values, uid: user.uid }));
        toast.success("Giriş işlemi başarılı!");
        resetForm();
      } catch (error) {
        console.log(error.message);
        setFirebaseError(error.message);
      }
    },
  });

  return (
    <Fragment>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-600">{formik.errors.email}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-600">{formik.errors.password}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            {firebaseError && (
              <div className="text-red-600 text-sm mt-2">{firebaseError}</div>
            )}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
