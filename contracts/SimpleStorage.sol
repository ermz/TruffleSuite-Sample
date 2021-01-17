// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract SimpleStorage {
  constructor() public {
  }

  uint256 public storedData;
  address public owner = msg.sender;
  mapping(address => uint) public counter;

  event SSValueStored(address setter, uint256 value);

  modifier onlyOwner() {
  	require(owner == msg.sender, "Permission not granted, Owner only");
  	_;
  }

  function getStoredData() public view returns (uint256) {
  	return storedData;
  }

  function getCount(address _address) public view onlyOwner returns (uint) {
  	return counter[_address];
  }

  function setStoredData(uint newNum) public {
  	storedData = newNum;
  	counter[msg.sender] += 1;
  	emit SSValueStored(msg.sender, newNum);
  }
}
