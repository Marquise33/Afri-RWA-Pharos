require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "0x" + "0".repeat(64);
const ETHERSCAN_API_KEY    = process.env.ETHERSCAN_API_KEY    || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },

  networks: {
    // ── Local Development ─────────────────────────────────────────
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },

    // ── Pharos Testnet ────────────────────────────────────────────
    pharos_testnet: {
      url: process.env.PHAROS_TESTNET_RPC || "https://testnet.dplabs-internal.com",
      chainId: 688688,
      accounts: [DEPLOYER_PRIVATE_KEY],
      gasPrice: "auto",
      timeout: 60000,
    },

    // ── Pharos Mainnet ────────────────────────────────────────────
    pharos_mainnet: {
      url: process.env.PHAROS_MAINNET_RPC || "https://pharos-rpc.publicnode.com",
      chainId: 8453200,
      accounts: [DEPLOYER_PRIVATE_KEY],
      gasPrice: "auto",
      timeout: 60000,
    },
  },

  etherscan: {
    apiKey: {
      pharos_testnet: ETHERSCAN_API_KEY,
      pharos_mainnet: ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "pharos_testnet",
        chainId: 688688,
        urls: {
          apiURL:      "https://testnet.pharosscan.xyz/api",
          browserURL:  "https://testnet.pharosscan.xyz",
        },
      },
      {
        network: "pharos_mainnet",
        chainId: 8453200,
        urls: {
          apiURL:      "https://pharosscan.xyz/api",
          browserURL:  "https://pharosscan.xyz",
        },
      },
    ],
  },

  gasReporter: {
    enabled:      process.env.REPORT_GAS === "true",
    currency:     "USD",
    coinmarketcap: process.env.CMC_API_KEY,
  },

  paths: {
    sources:   "./contracts",
    tests:     "./test",
    cache:     "./cache",
    artifacts: "./artifacts",
  },
};
