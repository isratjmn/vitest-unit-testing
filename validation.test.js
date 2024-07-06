import { it, expect, describe } from "vitest";
import { validateEmail, validationArrayNotEmpty } from "./validation";

describe("validateEmail()", () => {
	it("should validate a correct email address", () => {
		const email = "test@example.com";
		const resultFn = () => validateEmail(email);
		expect(resultFn).not.toThrow();
	});

	it("should throw an error if an invalid email is passed", () => {
		const email = "example.com";
		const resultFn = () => validateEmail(email);
		expect(resultFn).toThrow();
	});

	it("should throw an error if an empty string is passed", () => {
		const email = "";
		const resultFn = () => validateEmail(email);
		expect(resultFn).toThrow();
	});

	it("throws an error for a null email address", () => {
		expect(() => validateEmail(null)).toThrow("Invalid Email Address!");
	});
});

describe("validationArrayNotEmpty", () => {
	it("should validate a non-empty array", () => {
		const array = [2, 5];
		const resultFn = () => validationArrayNotEmpty(array);
		expect(resultFn).not.toThrow();
	});

	it("throws an error for an empty array", () => {
		expect(() => validationArrayNotEmpty([])).toThrow(
			"Array cannot be empty!"
		);
	});

	it("throws an error for a null array", () => {
		expect(() => validationArrayNotEmpty(null)).toThrow(
			"Array cannot be empty!"
		);
	});
});
