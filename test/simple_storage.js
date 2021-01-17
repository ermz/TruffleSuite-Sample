const SimpleStorage = artifacts.require("SimpleStorage");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function (accounts) {
	describe("Intial deployment", async () => {
		it("should assert true", async function () {
		await SimpleStorage.deployed();
		return assert.isTrue(true);
		});

		it("was deployed and it's initial value is 0", async () => {
			// get subject
			const ssInstance = await SimpleStorage.deployed();
			//verify it starts with zero
			const storedData = await ssInstance.getStoredData.call();
			assert.equal(storedData, 0, "Initial state should be zero");
		});
	});

	describe("Functionality", async () => {
		it("should store the value 42", async () => {
			//get the subject first
			const ssInstance = await SimpleStorage.deployed();
			//change the subject
			await ssInstance.setStoredData(42, { from: accounts[0] });
			// verify we changed the subject
			const storedData = await ssInstance.getStoredData.call();
			assert.equal(storedData, 42, `${storedData} was not stored!!`);
		})
	})
});
