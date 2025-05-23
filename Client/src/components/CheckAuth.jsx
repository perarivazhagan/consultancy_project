import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../store/auth-slice";

const CheckAuth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      try {
        const parsedToken = JSON.parse(storedToken);
        dispatch(checkAuth(parsedToken));
      } catch (error) {
        console.error("Error parsing token:", error);
        sessionStorage.removeItem("token");
      }
    }
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Allow access to admin login page without authentication
  if (window.location.pathname === "/auth/admin-login") {
    return children;
  }

  if (!isAuthenticated) {
    navigate("/auth/login");
    return null;
  }

  return children;
};

export default CheckAuth; 