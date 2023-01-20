import React from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);

  const changeAuthStatus = () => {
    setIsAuth(true);
  };
  return (
    <AuthContext.Provider value={{ isAuth, changeAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
