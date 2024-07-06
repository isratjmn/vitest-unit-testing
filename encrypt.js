import CryptoJS from "crypto-js";

export function encryptMessage(message, key, callback) {
	const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
	callback(encryptedMessage);
}

export function encryptMessagePromise(message, key) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				const encryptedMessage = CryptoJS.AES.encrypt(
					message,
					key
				).toString();
				resolve(encryptedMessage);
			} catch (error) {
				reject(new Error("Failed to encrypt message"));
			}
		}, 2000);
	});
}

const message = {
	name: "Mizan",
	password: "123123123",
};

const secretKey = "hgdfhdhd457dfht6545ythbh";

encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
	console.log("Callback encryption:", encryptedMessage);
});

encryptMessagePromise(JSON.stringify(message), secretKey)
	.then((encryptedMessage) => {
		console.log("Promise encryption:", encryptedMessage);
	})
	.catch((error) => {
		console.error("Promise error:", error);
	});
