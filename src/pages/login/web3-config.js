import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
export async function connectWallet () {
    if (window.ethereum) {
        try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Check if wallet is connected
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            console.log('Wallet is connected:', accounts[0]);
        }
        } catch (error) {
        console.log('Error:', error);
        }
    } else {
        console.log('Please install MetaMask!');
    }
}