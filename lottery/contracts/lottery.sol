pragma solidity ^0.4.17;

contract Lottery{
    address public manager;
    address[] public players;

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }

    function pickWinner() public restricted(){
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        //clear players array and create a dynamic array of length 0
        players = new address[](0);
    }

    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }

    function getPlayers() public view returns(address[]) {
        return players;
    }
}
