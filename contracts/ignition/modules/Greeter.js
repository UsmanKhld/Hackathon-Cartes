// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// module.exports = buildModule("Sending", (m) => {
//   const sendingContract = m.contract("Sending");
  
//   return { sendingContract };
// });

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Greeter", (m) => {
  const greeterContract = m.contract("Greeter", ["Hello"]);

  return { greeterContract };
});