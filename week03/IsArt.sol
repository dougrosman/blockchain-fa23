// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract IsArt {

    // pseudocode, which is a hybrid between code and human language

    // variable to keep track of contract art status
    bool isArt = false;

    // function to change art status
    function curate() public {
        // if(isArt == true) {
        //     isArt = false;
        // } else {
        //     isArt = true;
        // }

        // this line of code is the short version of
        // the if - else block above. ! means "not"
        isArt = !isArt;
    }

    // function to read the art status
    function critique() public view returns (string memory) {
        if(isArt == true) {
            return "This contract is most definitely art";
        } else {
            return "Yeah no this is just code";
        }
    }
}