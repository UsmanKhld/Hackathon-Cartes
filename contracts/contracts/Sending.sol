// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Sending {
    // Private state variable
    address private owner;

    // Defining a constructor
    constructor() public {
        owner = msg.sender;
    }

    // Function to get
    // address of owner
    function getOwner() public view returns (address) {
        return owner;
    }

    //this is where the user confirms their transaction
    function confirmSellerTransac(
        string memory name,
        string memory email,
        string memory phoneNumber,
        string memory businessName
    ) public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    name,
                    " representing ",
                    businessName,
                    " confirms that he sent produce to his receiver. Contact them at ",
                    email,
                    " or ",
                    phoneNumber
                )
            );
    }

    function confirmReceiverTransac(
        string memory name,
        string memory email,
        string memory phoneNumber,
        string memory businessName
    ) public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    name,
                    " representing ",
                    businessName,
                    " confirms that he received produce from their seller. Contact them at ",
                    email,
                    " or ",
                    phoneNumber
                )
            );
    }
}
