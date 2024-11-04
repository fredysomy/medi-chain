// scripts/deploy.js
async function main() {
    const hre = require("hardhat");
    const MediChain = await hre.ethers.getContractFactory("MediChain");
    const medichain = await MediChain.deploy();

    await medichain.deployed();
    console.log("Medichain deployed to:", medichain.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
