require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // For loading environment variables
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.27",
    
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,  // You can adjust the runs to optimize for size (lower value) or gas efficiency (higher value)
      },
    },
  },
  networks: {
    apechain: {
      url: `https://rpc.apechain.com`, // Taiko Helka RPC URL
      accounts: [process.env.PRIVATE_KEY] // Use environment variable for wallet private key
    },
    
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // Your Etherscan API key
    customChains: [
      {
        network: "apechain",
        chainId: 33139,
        urls: {
          apiURL: "https://api.apescan.io/api",
          browserURL: "https://apescan.io"
        }
      }
    ]
  }
};