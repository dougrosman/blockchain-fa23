// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract UncensoredMessages {
    string[] public messages;

    // an event to emit when a message is added
    event MessageAddedEvent(string message);

    function addMessage(string memory _message) public {
        messages.push(_message);
        emit MessageAddedEvent(_message);
    }

    function getAllMessages() public view returns (string[] memory) {
        return messages;
    }
}
