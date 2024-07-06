import { it, expect } from "vitest";
import { add } from "./math";

it("should return the correct sum if an array of number is provided", () => {
	// Arrange
	const numbers = [1, 2, 3];
	const expectedResults = numbers.reduce((acc, cur) => acc + cur);

	//  Actions
	const result = add(numbers);

	// Assertion
	expect(result).toBe(expectedResults);
});

it("should return the correct sum if an array of number is provided", () => {
	// Arrange
	const numbers = [1, "invalid", 3];

	//  Actions
	const result = add(numbers);

	// Assertion
	expect(result).toBeNaN();
});

it("it should provide Correct sum if an array numeric string is provided", () => {
	// Arrange
	const numbers = ["1", "3", "3"];
	const expectedResults = numbers.reduce((acc, cur) => +acc + +cur);

	//  Actions
	const result = add(numbers);

	// Assertion
	expect(result).toBe(expectedResults);
});

it("it should Throw an Error if no argument is passed", () => {
	const resultFn = () => {
		add(1, 2, 3);
	};

	expect(resultFn).toThrow();
});

it("it should Throw an Error if multiple argument is provided", () => {
	const resultFn = () => {
		add(1, 2, 3);
	};

	expect(resultFn).toThrow(/is not iterable/);
});
