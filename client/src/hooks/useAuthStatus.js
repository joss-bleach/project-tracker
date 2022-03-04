import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuthenticationStatus, setCheckingAuthenticationStatus] =
    useState(true);

  const { currentUser } = useSelector((state) => state.userAuthentication);
  useEffect(() => {
    if (currentUser) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
    setCheckingAuthenticationStatus(false);
  }, [currentUser]);

  return { authenticated, checkingAuthenticationStatus };
};
