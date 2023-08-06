import React from "react";
import { useSelector } from "react-redux";
import UseIcon from "./UseIcons";

const ProfileRow  = () => {
    const account = useSelector(state => state.account.value)

    return (
        <div className="d-flex p-2 flex-row justify-content-between">
            <div className="p-2"> Your Connected Wallet: <b>{account}</b></div>
            <button className="btn btn-primary btn-lg"> Profile <UseIcon iconName={'profile'} /> </button>
        </div>
    )
}

export default ProfileRow;