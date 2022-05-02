const BlockchainMessage = artifacts.require("./BlockchainMessage.sol");

contract("BlockchainMessage", accounts => {
  it("should allow user to update message", async () => {
    const BlockchainMessageInstance = await BlockchainMessage.deployed();

    await BlockchainMessageInstance.setMessage("Hello world", { from: accounts[0] });

    const storedData = await BlockchainMessageInstance.message();

    assert.equal(storedData, "Hello world", "Message was not updated");
  });
});
