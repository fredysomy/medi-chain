require("dotenv").config();
const Web3 = require("web3");
const contractABI = require("../../blockchain-deploy/artifacts/contracts/MediChain.sol/MediChain.json"); // Update the path to your ABI JSON file

// Initialize Web3 with Alchemy's endpoint directly
const web3 = new Web3(process.env.ALCHEMY_API_URL);

// Add account using private key from environment variable
const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);

// Set up the contract instance with the address and ABI
const contractAddress = process.env.CONTRACT_ADDRESS;
const contractInstance = new web3.eth.Contract(contractABI.abi, contractAddress);

// Export necessary variables and functions
module.exports = {
    web3,
    account,
    contractInstance,
    async sendTransaction(tx) {
        const gas = await tx.estimateGas({ from: account.address });
        const data = tx.encodeABI();
        
        const txData = {
            from: account.address,
            to: contractAddress,
            data,
            gas,
        };

        // Send transaction and wait for receipt
        const receipt = await web3.eth.sendTransaction(txData);
        return receipt;
    }
};
