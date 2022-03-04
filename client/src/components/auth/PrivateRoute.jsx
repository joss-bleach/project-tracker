import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";

const PrivateRoute = () => {
  const { authenticated, checkingAuthenticationStatus } = useAuthStatus();

  if (checkingAuthenticationStatus) {
    return <p>Loading...</p>;
  }

  return authenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
