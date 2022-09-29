const hre = require("hardhat");

async function main() {

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = MyNFT.attach("0xb4ED596837E28328A1Aa13EDb1b5D06E456E75b9");
  const mintedNft = await myNFT.mintTo("0x9fb32ba8D0B6fA7d7C2901d21c457641F218B6f3");

  console.log("token minted", mintedNft);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });