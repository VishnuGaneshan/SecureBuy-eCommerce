import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../components/ProductCard";

export default function Products () {
    const account = useSelector(state => state.account.value);

    return (
        <div className="w-75">
            <h1>Manage Your Products</h1>
            <hr/>
            <div className="container m-3 mb-5 mt-5">
                <h3>Add New Product</h3>
                <form>
                    <div class="form-group row">
                        <label for="companyAccount" class="col-sm-2 col-form-label">Your Account</label>
                        <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={account} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputCompanyAccount" class="col-sm-2 col-form-label">Company Account</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputSellerAccount" placeholder="0xd18025BAfF3e1CB11a85EC6416E4E6A8fe0dD789" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSellerAccount" class="col-sm-2 col-form-label">Product ID</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputSellerAccount" placeholder="Ab23bf&8" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSellerName" class="col-sm-2 col-form-label">Token URI (Image link)</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputSellerName" placeholder="https://example.com/img/dk4k4.png" />
                        </div>
                    </div>
                    <button type="button" class="btn btn-success">Add</button>
                </form>
            </div>
            <br/>
            <h3>Ready Sell Products</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}