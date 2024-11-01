// scripts/deploy.js
async function main() {
    const hre = require("hardhat");
    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    await simpleStorage.deployed();
    console.log("SimpleStorage deployed to:", simpleStorage.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
