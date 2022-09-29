// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const BASE_URI = "https://gateway.pinata.cloud/ipfs/QmatMezLmAeqFisRfbmPH8qApXNLFn1Y6MZvnYSVz1Teud";

async function main() {
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy(BASE_URI);

  const address = myNFT.address

  console.log(
    `MyNFT deployed at ${address}`
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

