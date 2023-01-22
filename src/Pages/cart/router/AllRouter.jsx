import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Products from '../pages/Products';
import SinglepProduct from '../pages/SinglepProduct';
import Test from './Test';
const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/test" element={<Test/>} />
            <Route path="/:id" element={<SinglepProduct/>} />
        </Routes>
    );
};

export default AllRouter;