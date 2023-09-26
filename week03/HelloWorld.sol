// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract HelloWorld {

    // Global variables
    string myString = "wow cool"; // takes up STORAGE,

    // uint256 = unsigned integer (256 bits)
    uint specialNumber = 0;
    // will live on the blockchain inside of this smart contract forever*

    function addNumbers(uint256 num1, uint256 num2) public pure returns (uint256) {
        return num1 + num2;
    }

    function increaseSpecialNumber() public {
        specialNumber = specialNumber + 1;

        // this is a shorthand for what's happening above
        // specialNumber++;
    }

    function getSpecialNumber() public view returns (uint256) {
        return specialNumber;
    }

    function getHelloWorld() public view returns (string memory) {
        return myString;
    }
}