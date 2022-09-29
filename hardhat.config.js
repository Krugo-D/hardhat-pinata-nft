/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;


module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
     hardhat: {},
     goerli: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     },
     rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: [`0x${PRIVATE_KEY}`]
   }
  },
}
