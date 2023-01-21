import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { data } = useSelector((store) => store.auth);

  console.log("PrivateRoute", data.isAuth, data.token);
  if (!data.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
