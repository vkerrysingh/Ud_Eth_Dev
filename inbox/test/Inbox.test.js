const assert = require('assert');

//This will serve as our local ethereum test network
const ganache = require('ganache-cli')

//Constructor function. Hence note case.
const Web3 = require('web3');
//must specify a provider for web3 to connect to ganache
const web3 = new Web3(ganache.provider());



class Car{

  park(){
    return 'stopped';
  }

  drive(){
    return 'vroom';
  }
}

//Initialise car to undefined.
//Makes it available throughout the tests.
let car;

beforeEach(() => {
  //console.log('a');
  car = new Car();
});

describe('Car', ()=>{
  it('can park', ()=>{
    assert.equal(car.park(),'stopped');
  });

  it('can drive', () =>{
    assert.equal(car.drive(),'vroom');
  });
});
