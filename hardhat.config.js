require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.6.0",
    
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      accounts: [PRIVATE_KEY]
    }
  }
};
