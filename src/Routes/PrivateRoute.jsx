import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../Redux/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  console.log("privateroute", isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
