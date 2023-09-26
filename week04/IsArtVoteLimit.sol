// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Smart contract that allows you to vote on whether the contract itself is a work of Art
// Limits each wallet to one vote (one person, one vote)

contract IsArtVoteLimit {
    bool public isArt = false;

    // store the amount of yes and no votes as state variables
    uint256 public votesYes = 0;
    uint256 public votesNo = 0;

    mapping (address => bool) addressToHasVoted;

    // a simple function that returns "true" if the person has already voted,
    // or "false" if they have not
    function checkWalletHasVoted() internal view returns (bool) {
        return addressToHasVoted[msg.sender];
    }

    function vote(bool decision) public {
        // check if this wallet has voted
        require(checkWalletHasVoted() == false, "You have already voted");

        if(decision == true) {
            votesYes++;
        } else {
            votesNo++;
        }

        // update the addressToHasVoted mapping to indicate that the wallet
        // has voted.
        addressToHasVoted[msg.sender] = true;

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
