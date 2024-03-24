// pragma solidity ^0.8.11;

// contract Sending {
//     // Private state variable
//     address private owner;

//     // Defining a constructor
//     constructor() public {
//         owner = msg.sender;
//     }

//     // Function to get
//     // address of owner
//     function getOwner() public view returns (address) {
//         return owner;
//     }

//     //this is where the user confirms their transaction
//     function confirmSellerTransac(
//         string memory name,
//         string memory email,
//         string memory phoneNumber,
//         string memory businessName
//     ) public pure returns (string memory) {
//         return
//             string(
//                 abi.encodePacked(
//                     name,
//                     " representing ",
//                     businessName,
//                     " confirms that he sent produce to his receiver. Contact them at ",
//                     email,
//                     " or ",
//                     phoneNumber
//                 )
//             );
//     }

//     function confirmReceiverTransac(
//         string memory name,
//         string memory email,
//         string memory phoneNumber,
//         string memory businessName
//     ) public pure returns (string memory) {
//         return
//             string(
//                 abi.encodePacked(
//                     name,
//                     " representing ",
//                     businessName,
//                     " confirms that he received produce from their seller. Contact them at ",
//                     email,
//                     " or ",
//                     phoneNumber
//                 )
//             );
//     }
// }

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    function deposit() public payable {}
}
