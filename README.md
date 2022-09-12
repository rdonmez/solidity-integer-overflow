# Solidity Integer Overflow Example

This project demonstrates integer overflow on solidity. This bug fixed in solidity version of 0.8. 

When you would increment a uint variable over of their max value, It's would be zero. To protect from this vulnerability, use at least 0.8 version of solidity. Or use "unchecked" statement.

# 1. Install Dependencies
```shell
$ npm install
```

# 2. Run Tests
```shell
$ npx hardhat test
```
