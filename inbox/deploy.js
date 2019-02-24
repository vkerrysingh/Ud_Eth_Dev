const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'slow heavy earn grape fragile transfer dove extend eye sun miss fantasy',
  'https://rinkeby.infura.io/v3/85ae7df7e82e47558d7a56593ba83ad5'
);

const web3 = new Web3(provider);

//Only using this so that we can use await
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

//Note the need for the argument parameter. The constructor takes an argument.
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments:['Hi there!']})
    .send({gas:'1000000', from: accounts[0]});

  console.log('Contract deployed to ', result.options.address);


};


deploy();
