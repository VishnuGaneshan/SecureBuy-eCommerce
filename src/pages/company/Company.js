import React from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { Claims, Orders, Sellers} from "./subPages";
import ProfileRow from "../../components/ProfileRow";

const Company = () => {

    return (
        <>
        <ProfileRow/>
        <div className="d-flex p-2 justify-content-around ">
            <div className="btn-group-vertical align-self-start">
                <Link type="button" class="btn btn-light" to="sellers">My Sellers</Link>
                <Link type="button" class="btn btn-light" to="orders">Product Orders</Link>
                <Link type="button" class="btn btn-light" to="claims">Warranty Claims</Link>
            </div>
            <Routes>
                <Route path="/orders" element={ <Orders/> } />
                <Route path="/claims" element={ <Claims/> } />
                <Route path="/sellers" element={ <Sellers/> } />
                <Route path="/*" element={ <Navigate to="orders" replace={true} /> } />
            </Routes>
        </div>
        </>
    )
}

export default Company;