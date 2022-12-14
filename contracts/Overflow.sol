// SPDX-License-Identifier: MIT
pragma solidity 0.7.0; // use 0.8+ version here

contract Overflow {

    uint8 public myUint8 = (2 ** 8) -2;
    uint16 public myUint16 = (2 ** 16) -2; 
    uint256 public myUint256 = (2 ** 256) -2;
 
    function incrementUint8() public returns(bool) {
        myUint8++; // use unchecked here
        return true;
    }

    function incrementUint16() public returns(bool) {
        myUint16++; // use unchecked here
        return true;
    }

    function incrementUint256() public returns(bool) {
        myUint256++; // use unchecked here
        return true;
    }
}