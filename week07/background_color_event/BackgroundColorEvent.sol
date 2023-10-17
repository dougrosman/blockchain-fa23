// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract BackgroundColor {

    uint8 public red; // 0-255
    uint8 public green; // 0-255
    uint8 public blue; // 0-255

    // an event we will use to broadcast the red, green and blue values in the contract
    event colorSetEvent(uint8 _red, uint8 _green, uint8 _blue);

    function setRed(uint8 _red) public {
        red = _red;
        
        // emit the new color values when the red color is set
        emit colorSetEvent(red, green, blue);
    }

    function setGreen(uint8 _green) public {
        green = _green;

        // emit the new color values when the green color is set
        emit colorSetEvent(red, green, blue);
    }

    function setBlue(uint8 _blue) public {
        blue = _blue;
        
        // emit the new color values when the blue color is set
        emit colorSetEvent(red, green, blue);
    }

    // functions to read the red, green and blue values from the contract
    function getRed() public view returns (uint8)  {
        return red;
    }

    function getGreen() public view returns (uint8)  {
        return green;
    }

    function getBlue() public view returns (uint8) {
        return blue;
    }
}