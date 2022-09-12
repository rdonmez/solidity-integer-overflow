
const hre =  require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(deployer.address);
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});