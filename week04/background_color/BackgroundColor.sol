// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract BackgroundColor {

    uint8 public red; // 0-255
    uint8 public green; // 0-255
    uint8 public blue; // 0-255

    function setRed(uint8 _red) public {
        red = _red;
    }

    function setGreen(uint8 _green) public {
        green = _green;
    }

    function setBlue(uint8 _blue) public {
        blue = _blue;
    }

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