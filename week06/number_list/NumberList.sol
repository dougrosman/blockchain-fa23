// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// in this contract, we will store a list of
// numbers that anyone can add to

contract NumberList {

    uint[] public numberList;

    // create a function to allow anyone to
    // insert any number they want into the numberList

    function insertNumber(uint number) public {
        numberList.push(number);
    }

    // create a function for anyone to view the entire numberList
    function viewNumberList() public view returns (uint[] memory) {
        return numberList;
    }

    // create a function for anyone to view A SPECIFIC number
    // from the numberList
    function viewSpecificNumber(uint index) public view returns (uint) {

        require(index < numberList.length, "No number exists here");
        return numberList[index];
    }

}