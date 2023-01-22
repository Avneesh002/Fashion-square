import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { data } = useSelector((store) => store.auth);
  // const { isLoggedIn } = useSelector((store) => store.authStore);
  const { pathname } = useLocation();

  console.log("PrivateRoute", data.isAuth, data.token);
  if (data.isAuth) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate to="/login" state={{ from: pathname }} replace />
    );
  }
};

export default PrivateRoute;
// if (isLoggedIn) {
//   return children;
// } else {
//   return (
//     // Redirecting to Login page
//     <Navigate
//       to="/login"
//       state={{ from: pathname }}
//       replace
//       // spacer
//     />
//   );
// }
