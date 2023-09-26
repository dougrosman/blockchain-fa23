// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract IsArtVote {
    bool isArt = false;

    // store the amount of yes and no votes as state variables
    uint256 votesYes = 0;
    uint256 votesNo = 0;

    // function to change art status
    function voteYes() public {
        
        // increase the value stored in votesYes by 1.
        // votesYes++ is a shorthand for votesYes = votesYes + 1;
        votesYes++;

        if (votesYes > votesNo) {
            isArt = true;
        } else {
            isArt = false;
        }
    }

    function voteNo() public {
        votesNo++;
        

        if (votesYes > votesNo) {
            isArt = true;
        } else {
            isArt = false;
        }

    }

    function getYesVotes() public view returns (uint256) {
        return votesYes;
    }

    function getNoVotes() public view returns (uint256) {
        return votesNo;
    }

    function getArtStatus() public view returns (bool) {
        return isArt;
    }

    // function to read the art status
    function critique() public view returns (string memory) {
        if (isArt == true) {
            return "This contract is most definitely art";
        } else {
            return "Yeah no this is just code";
        }
    }
}
