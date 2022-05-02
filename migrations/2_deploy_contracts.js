var BlockchainMessage = artifacts.require("./BlockchainMessage.sol");

module.exports = function(deployer) {
  deployer.deploy(BlockchainMessage);
};
