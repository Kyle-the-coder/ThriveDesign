import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "./layout/NavLayout";
import { ErrorLayout } from "./layout/ErrorLayout";
import { landingRoute } from "./pages/Landing/Landing";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [{ path: "/", ...landingRoute }],
  },
]);
