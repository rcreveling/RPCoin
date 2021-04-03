const RPCoin = artifacts.require("RPCoin");

 contract("RPCoin", accounts => {
//   it("should put 10000 MetaCoin in the first account", () =>
//     MetaCoin.deployed()
//       .then(instance => instance.getBalance.call(accounts[0]))
//       .then(balance => {
//         assert.equal(
//           balance.valueOf(),
//           10000,
//           "10000 wasn't in the first account"
//         );
//       }));
  it("should get the name of the token", () =>
      RPCoin.deployed()
        .then(instance => instance.name())
        .then(name =>
            assert.equal(
                name,
                "RPCoin",
                "That's da wrong token!"
            )
        )
  )
  it("should check the balance of the original account", () =>
      RPCoin.deployed()
        .then(instance => instance.balanceOf.call(accounts[0]))
        .then(balance => {
            assert.equal(
              balance.valueOf().toString(),
              "1000000000000000000000000",
                "Wait, you have money?"
            )
        })
    )
//   it("should call a function that depends on a linked library", () => {
//     let meta;
//     let metaCoinBalance;
//     let metaCoinEthBalance;

//     return MetaCoin.deployed()
//       .then(instance => {
//         meta = instance;
//         return meta.getBalance.call(accounts[0]);
//       })
//       .then(outCoinBalance => {
//         metaCoinBalance = outCoinBalance.toNumber();
//         return meta.getBalanceInEth.call(accounts[0]);
//       })
//       .then(outCoinBalanceEth => {
//         metaCoinEthBalance = outCoinBalanceEth.toNumber();
//       })
//       .then(() => {
//         assert.equal(
//           metaCoinEthBalance,
//           2 * metaCoinBalance,
//           "Library function returned unexpected function, linkage may be broken"
//         );
//       });
  });