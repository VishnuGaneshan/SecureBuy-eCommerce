import React from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Orders, Products, Claims } from './subPages';
import ProfileRow from "../../components/ProfileRow";

const Customers = () => {

    return (
        <>
        <ProfileRow/>
        <div className="d-flex p-2 justify-content-around ">
            <div className="btn-group-vertical align-self-start">
                <Link type="button" class="btn btn-light" to="products">Products</Link>
                <Link type="button" class="btn btn-light" to="orders">Orders</Link>
                <Link type="button" class="btn btn-light" to="claims">warranty Claims</Link>
            </div>
            <Routes>
                <Route path="/products" element={ <Products/> } />
                <Route path="/orders" element={ <Orders/> } />
                <Route path="/claims" element={ <Claims/> } />
                <Route path="/*" element={ <Navigate to="orders" replace={true} /> } />
            </Routes>
        </div>
        </>
    )
}

export default Customers;