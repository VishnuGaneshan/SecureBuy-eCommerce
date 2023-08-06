import React from "react";
import { useSelector } from "react-redux";

export default function Sellers () {
    const account = useSelector(state => state.account.value);

    return (
        <div className="w-75">
            <h2>Manage your Sellers</h2>
            <hr/>
            <div className="container m-3 mb-5 mt-5">
                <h3>Add New Seller</h3>
                <form>
                    <div class="form-group row">
                        <label for="companyAccount" class="col-sm-2 col-form-label">Company Account</label>
                        <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={account} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSellerAccount" class="col-sm-2 col-form-label">Seller Account</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputSellerAccount" placeholder="0xd18025BAfF3e1CB11a85EC6416E4E6A8fe0dD789" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSellerName" class="col-sm-2 col-form-label">Seller Name</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputSellerName" placeholder="Adibas Manoj" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSellerLocation" class="col-sm-2 col-form-label">Seller Location</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputSellerLocation" placeholder="New Delhi" />
                        </div>
                    </div>
                    <button type="button" class="btn btn-success">Add</button>
                </form>
            </div>
            <div className="container m-3 mb-5 mt-5">
                <h3>Remove Seller</h3>
                <form>
                    <div class="form-group row">
                        <label for="companyAccount" class="col-sm-2 col-form-label">Company Account</label>
                        <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={account} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSellerAccount" class="col-sm-2 col-form-label">Seller Account</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputSellerAccount" placeholder="0xd18025BAfF3e1CB11a85EC6416E4E6A8fe0dD789" />
                        </div>
                    </div>
                    <button type="button" class="btn btn-danger">Remove</button>
                </form>
            </div>
            <div className="container m-3 mb-5 mt-5">
                <h3>List of your sellers</h3>
                <br/>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Account</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">0xc50daE4468a95976EdkwsE15Fa6236b8B3c3B3452</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        </tr>
                        <tr>
                        <th scope="row">0xa00daE4468a95976Ed60Edkefdk36b8B3c3BC6457</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        </tr>
                        <tr>
                        <th scope="row">0xd90daE4468a95976Ed60E15edjs236b8B3c3BC784</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}