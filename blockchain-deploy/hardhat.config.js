

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");


module.exports = {
    solidity: "0.8.0",
    defaultNetwork: "sepolia",
    networks: {
        sepolia: {
            url: process.env.ALCHEMY_API_URL,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
    },
};
