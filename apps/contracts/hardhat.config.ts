import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `46175c7fe1974211a3dc29b71ba4748b413476eabb6f7a14218801b81a77b739`,
      ],
    }
  }
};

export default config;
