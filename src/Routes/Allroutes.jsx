import { Routes, Route } from "react-router-dom";

import React from "react";
import Homepage from "../Pages/Homepage/Homepage";
import Products from "../Pages/Product Page/Products";
import Login from "./../Pages/Signup_Login/Login";
import Basepage from "../Pages/Basepage";
// import PrivateRoute from "./PrivateRoute";
import SingleProductPage from "../Pages/SingleProductPage";
import Cart from "../Pages/Carts/CartPage";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/base" element={<Basepage />}></Route>
      <Route
        path="/products"
        element={
          // <PrivateRoute>
          <Products />
          // </PrivateRoute>
        }
      ></Route>
      <Route
        path="/products/:id"
        element={
          //<PrivateRoute>
          <SingleProductPage />
          //</PrivateRoute>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          //<PrivateRoute>
          <Cart />
          //</PrivateRoute>
        }
      ></Route>
      <Route path="/payment" element={<PaymentPage />}></Route>
    </Routes>
  );
};

export default Allroutes;
