const assert = require('assert');

//This will serve as our local ethereum test network
const ganache = require('ganache-cli')

//Constructor function. Hence note case.
const Web3 = require('web3');
//must specify a provider for web3 to connect to ganache
const web3 = new Web3(ganache.provider());

beforeEach(()=>{
  //Get a list of all accounts
  web3.eth.getAccounts()
  .then(fetchedAccounts => {
    console.log(fetchedAccounts);
  });

  //Use one of those accounts to deploy the contract
});

describe('Inbox', ()=> {
  it('deploys a contract',() => {});
})
