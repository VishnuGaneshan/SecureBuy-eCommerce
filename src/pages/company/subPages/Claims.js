import React from "react"

export default function Claims () {
    return (
        <div className="w-75">
            <div className="container mb-5">
                <h3>Warranty Claims</h3>
                <hr/>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Claimed Date</th>
                        <th scope="col">Product</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">23/05/2023</th>
                        <td>457812</td>
                        <td>broke phone</td>
                        <td>Requested</td>
                        </tr>
                        <tr>
                        <th scope="row">12/04/2022</th>
                        <td>56942</td>
                        <td>screen not working</td>
                        <td>Pending</td>
                        </tr>
                        <tr>
                        <th scope="row">14/03/2021</th>
                        <td>457812</td>
                        <td>hot water problem</td>
                        <td>Approved</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}