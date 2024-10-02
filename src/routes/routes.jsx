import { createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./mainRoutes";
import { authRoutes } from "./authRoutes";
import { adminRoutes } from "./adminRoutes";

export const router = createBrowserRouter([
  mainRoutes,
  authRoutes,
  adminRoutes,
]);
