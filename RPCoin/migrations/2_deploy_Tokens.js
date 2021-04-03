const RPCoin = artifacts.require("RPCoin")

module.exports = async function (deployer, network, accounts) {
    // Deploy RPCoin
    await deployer.deploy(RPCoin);
    const RPC = await RPCoin.deployed();
}

// const MyToken = artifacts.require("MyToken")
// module.exports = async function (deployer, network, accounts) {
    // Deploy MyToken
//    await deployer.deploy(MyToken)
//    const RPC = await MyToken.deployed()
//  } 
