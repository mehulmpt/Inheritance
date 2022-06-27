const Migrations = artifacts.require("Parent");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
