const hre = require("hardhat");

async function main() {

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = MyNFT.attach("0xb4ED596837E28328A1Aa13EDb1b5D06E456E75b9");
  const owner = await myNFT.ownerOf(1);

  console.log({owner});
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });