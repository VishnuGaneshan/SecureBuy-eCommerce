import React from "react";
import { connectWallet } from "../../web3Config/walletConnect";
import { useSelector } from "react-redux";

export default function ConnectWallet () {
    const account = useSelector(state => state.account.value);
    
    const connectToWallet = () => connectWallet();

    return (
        <div className="text-center container bg-primary p-5 my-5">
            <h3 className="my-5 text-white"> Join the SecureBuy community and enjoy a seamless shopping experience </h3>
            {!account ? 
            (<button className="btn btn-outline-light" onClick={connectToWallet}>Connect Your Crypto wallet</button>) 
            : (
            <>
            <h4>Connected To: {account}</h4>
            <p> Select your role from navbar menu </p>
            </>)}
        </div>
    )
}