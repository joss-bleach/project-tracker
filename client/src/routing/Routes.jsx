import { useRoutes } from "react-router-dom";

// Components
import PrivateRoute from "../components/auth/PrivateRoute";

// Pages
import Landing from "../pages/Landing";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <PrivateRoute />,
      children: [{ path: "/dashboard", element: <Dashboard /> }],
    },
  ]);
  return routes;
};

export default Routes;
