const path = require('path');  //builds a path from the current file.
const fs = require('fs');

//Need the solidity compiler
const solc = require('solc');

//__dirname will get the inbox dir path.
//look in the contracts folder and get a path to the Inbox.sol file.
const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');

//Read in the contents of the file. The raw source code.
const source = fs.readFileSync(inboxPath,'utf8');

console.log(solc.compile(source,1));
