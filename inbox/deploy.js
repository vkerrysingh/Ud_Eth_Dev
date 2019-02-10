const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'slow heavy earn grape fragile transfer dove extend eye sun miss fantasy',
  'https://rinkeby.infura.io/v3/85ae7df7e82e47558d7a56593ba83ad5'
);

const web3 = new Web3(provider);
