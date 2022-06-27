const Migrations = artifacts.require("Child");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
