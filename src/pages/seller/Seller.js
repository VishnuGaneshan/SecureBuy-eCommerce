import React from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Orders, Products } from './subPages'
import ProfileRow from "../../components/ProfileRow";

const Sellers = () => {

    return (
        <>
        <ProfileRow/>
        <div className="d-flex p-2 justify-content-around ">
            <div className="btn-group-vertical align-self-start">
                <Link type="button" class="btn btn-light" to="products">Products</Link>
                <Link type="button" class="btn btn-light" to="orders">Orders</Link>
            </div>
            <Routes>
                <Route path="/products" element={ <Products/> } />
                <Route path="/orders" element={ <Orders/> } />
                <Route path="/*" element={ <Navigate to="orders" replace={true} /> } />
            </Routes>
        </div>
        </>
    )
}

export default Sellers;