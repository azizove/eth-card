import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-abi-exporter";

const INFURA_API_KEY = "dc3e3743e1f448cbbc3dd50915d4b2b6";
const SEPOLIA_PRIVATE_KEY = "c8f57e6eea5b6a2656472377e2d87b9e1ee5bb8b66c4aff575e379d54604c2d4"


const config: HardhatUserConfig = {
  solidity: "0.8.19",
  abiExporter: [
    {
      path: '../web/',
      format: "json"
    }
  ],
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `46175c7fe1974211a3dc29b71ba4748b413476eabb6f7a14218801b81a77b739`,
      ],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

export default config;
