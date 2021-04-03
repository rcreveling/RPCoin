//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RPCoin is ERC20 {
    constructor() ERC20("RPCoin", "RPC"){
        _mint(msg.sender, 1000000000000000000000000);
    }

}

//  event NewZombie(uint zombieId, string name, uint dna);

//     uint dnaDigits = 16;
//     uint dnaModulus = 10 ** dnaDigits;

//     struct Zombie {
//         string name;
//         uint dna;
//     }

//     Zombie[] public zombies;

//     mapping (uint => address) public zombieToOwner;
//     mapping (address => uint) ownerZombieCount;

//     function _createZombie(string memory _name, uint _dna) internal {
//         uint id = zombies.push(Zombie(_name, _dna)) - 1;
//         zombieToOwner[id] = msg.sender;
//         ownerZombieCount[msg.sender]++;
//         emit NewZombie(id, _name, _dna);
//     }