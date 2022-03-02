import { useRoutes } from "react-router-dom";

// Components

// Pages
import Landing from "../pages/Landing";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

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
  ]);
  return routes;
};

export default Routes;
