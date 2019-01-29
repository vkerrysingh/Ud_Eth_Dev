const assert = require('assert');

//This will serve as our local ethereum test network
const ganache = require('ganache-cli')

//Constructor function. Hence note case.
const Web3 = require('web3');
//must specify a provider for web3 to connect to ganache
const web3 = new Web3(ganache.provider());

let accounts;

//wait for accounts to be populated.
beforeEach(async ()=>{
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts()

  //Use one of those accounts to deploy the contract
});

describe('Inbox', () => {
  it('deploys a contract',() => {
    console.log(accounts);
  });
})
