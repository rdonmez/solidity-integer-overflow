const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

describe("Overflow Contract", () => {

    let deployer, overflow;

    beforeEach(async () => {
        [deployer] = await ethers.getSigners();
        const Overflow = await ethers.getContractFactory("Overflow");
        overflow = await Overflow.deploy();
        await overflow.deployed();
    });

    describe("Uint8 tests", () => {

        it("Should reset the value to 0 after 255", async () => {
            await overflow.incrementUint8();
            expect(await overflow.myUint8()).to.equal(255);
            await overflow.incrementUint8();
            expect(await overflow.myUint8()).to.equal(0);
        });

        
    });

    describe("Uint16 tests", () => {

        it("Should reset the value to 0 after 65535", async () => {
            await overflow.incrementUint16();
            expect(await overflow.myUint16()).to.equal(65535);
            await overflow.incrementUint16();
            expect(await overflow.myUint16()).to.equal(0);
        });

        
    });

    describe("Uint256 tests", () => {

        it("Should reset the value to 0 after 115792089237316195423570985008687907853269984665640564039457584007913129639935", async () => {
            await overflow.incrementUint256();
            expect(await overflow.myUint256()).to.equal(BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639935"));
            await overflow.incrementUint256();
            expect(await overflow.myUint256()).to.equal(0);
        });

        
    });

});