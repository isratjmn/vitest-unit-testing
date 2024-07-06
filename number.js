function validationStringNotEmpty(string) {
	if (!string || string.trim() === "") {
		throw new Error("Input String is empty");
	}
}

function transformToNumber(string) {
	const number = Number(string);
	if (isNaN(number)) {
		throw new Error("Input is not a valid number");
	}
	return number;
}

function validateNumber(number) {
	if (typeof number !== "number" || isNaN(number)) {
		throw new Error("Invalid number");
	}
}

export function cleanNumber(inputNumbers) {
	const numbers = [];
	for (const numberInput of inputNumbers) {
		validationStringNotEmpty(numberInput);
		const number = transformToNumber(numberInput);
		validateNumber(number);
		numbers.push(number);
	}
	return numbers;
}
