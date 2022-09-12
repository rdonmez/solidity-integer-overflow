// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract SafeOverflow {

    uint8 public myUint8 = (2 ** 8) -2;
    uint16 public myUint16 = (2 ** 16) -2; 
    uint256 public myUint256 = (2 ** 256) -2;
 
    function incrementUint8() public returns(bool) {
        unchecked { myUint8 = myUint8 + 1; }
        return true;
    }

    function incrementUint16() public returns(bool) {
        unchecked {
            myUint16++;
        }
        return true;
    }

    function incrementUint256() public returns(bool) {
        unchecked {
            myUint256++;
        }
        return true;
    }
}