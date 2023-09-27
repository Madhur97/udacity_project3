const HDWalletProvider = require('@truffle/hdwallet-provider');
MNEMONIC = 'project antique velvet sleep sorry token milk kingdom path amused raw defy'
PROJECT_ID = '3a749d3f3b36454b91fcebac3aab95bf'

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   gas: 6721975,
    //   gasPrice: 20000000000,
    //   network_id: "5777" // Match any network id
    // },
    development: {
      provider: () => new HDWalletProvider("possible image utility federal brisk era bean edge sheriff soccer attract satisfy", `HTTP://127.0.0.1:7545`),
        network_id: 5777,
        gas: 6721975,
        gasPrice: 20000000000
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://sepolia.infura.io/v3/${PROJECT_ID}`),
        network_id: 11155111,
        gas: 4465030,
        gasPrice: 10000000000
    },
  }
};