const assert = require('assert');

//This will serve as our local ethereum test network
const ganache = require('ganache-cli')

//Constructor function. Hence note case.
const Web3 = require('web3');
//must specify a provider for web3 to connect to ganache
const web3 = new Web3(ganache.provider());

//interface and bytecode come from the solc compile
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;

//wait for accounts to be populated.
beforeEach(async ()=>{
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts()

  //Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data:bytecode, arguments:['Hi there!'] })
    .send({ from:accounts[0], gas:'1000000' })
});

/*
describe('Inbox', () => {
  it('deploys a contract',() => {
    //console.log(accounts);
    console.log(inbox);
  });
})
*/

describe('Inbox', () => {
  it('deploys a contract',() => {
    //ok method checks if a value exists. i.e is address a defined value
    assert.ok(inbox.options.address);
  });
})
