import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

// export let walletState = { isConnected: false, connectedAccount: undefined };

// wallet connect
export async function connectWallet () {
    if (window.ethereum) {
        try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Check if wallet is connected
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                console.log('Wallet is connected:', accounts[0]);

                // to auto update connected account no.
                // walletState = {isConnected: true, connectedAccount: accounts[0]};
                // autoUpdater();
            }
        } catch (error) {
            console.log('Error:', error);
        }
    } else {
        console.log('Please install MetaMask!');
    }
}

export const getCurrentAccount = async () => {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
} 

