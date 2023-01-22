import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/cart/pages/Cart"
import React from "react";
import Homepage from "../Pages/Homepage/Homepage";
import Products from "../Pages/Product Page/Products";
import Login from "./../Pages/Signup_Login/Login";
import Basepage from "../Pages/Basepage";
import PrivateRoute from "./PrivateRoute";
import SingleProductPage from "../Pages/SingleProductPage";

import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import { CartContext } from "../Pages/cart/context/CartContext";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/base" element={<Basepage />}></Route>
      <Route
        path="/products"
        element={
          
          <Products />
          
        }
      ></Route>
      <Route
        path="/products/:id"
        element={
          
          <SingleProductPage />
          
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
          
            
          <Cart/>
          </PrivateRoute>
        }
      ></Route>
      <Route path="/payment" element={
       <PrivateRoute>
      <PaymentPage />
      </PrivateRoute>
      }></Route>
    </Routes>
  );
};

export default Allroutes;
