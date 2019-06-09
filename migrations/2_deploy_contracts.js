const MeroToken = artifacts.require("./MeroToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MeroToken);
};
