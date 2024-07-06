import { it, expect, beforeAll, afterAll, beforeEach, afterEach } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./encrypt";
import CryptoJS from "crypto-js";

beforeAll(() => {
	console.log(" Before ALL");
});
afterAll(() => {
	console.log("After ALL");
});
beforeEach(() => {
	console.log("Before Each Test");
});

afterEach(() => {
	console.log("After Each Test");
});

it("should encrypt a message", async () => {
	const message = "Proogramming Hero";
	const secretKey = "456789";
	const encryptedData = await new Promise((resolve, reject) => {
		encryptMessage(message, secretKey, (message) => {
			resolve(message);
		});
	});

	expect(encryptedData).toBeDefined();
});

it("should also just pass", async () => {
	const message = "Proogramming Hero";
	const secretKey = "456789";

	const encryptedData = await encryptMessagePromise(message, secretKey);
	expect(encryptedData).toBeDefined();
});

it("should encrypt the message correctly", async () => {
	const message = "Proogramming Hero";
	const key = "456789";

	const encryptedMessage = await encryptMessagePromise(message, key);
	expect(encryptedMessage).toBeDefined();

	const decryptedMessage = CryptoJS.AES.decrypt(
		encryptedMessage,
		key
	).toString(CryptoJS.enc.Utf8);
	expect(decryptedMessage).toBe(message);
});
