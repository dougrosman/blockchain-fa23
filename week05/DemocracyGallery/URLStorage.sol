// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract URLStorage {
    address public owner;
    string public storedURL;

    event URLStored(string url);
    event URLRemoved();

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action.");
        _;
    }

    function storeURL(string memory url) public {
        storedURL = url;
        emit URLStored(url);
    }

    function retrieveURL() public view returns (string memory) {
        return storedURL;
    }

    function removeURL() public onlyOwner {
        delete storedURL;
        emit URLRemoved();
    }
}
