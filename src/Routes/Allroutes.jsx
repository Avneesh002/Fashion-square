import { Routes, Route } from "react-router-dom";

import React from "react";
import Homepage from "../Pages/Homepage/Homepage";
import Products from "../Pages/Product Page/Products";
import SingleProduct from "../Pages/Product Page/SingleProduct";
import Login from "./../Pages/Signup_Login/Login";
import Basepage from "../Pages/Basepage";
import PrivateRoute from "./PrivateRoute";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/base" element={<Basepage />}></Route>
    </Routes>
  );
};

export default Allroutes;
