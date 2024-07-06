import { it, expect } from "vitest";
import { cleanNumber } from "./number";

it("shoild return an array of numbers if an array of string number is provided", () => {
	const stringNumbers = ["2", "5"];
	const result = cleanNumber(stringNumbers);

	expect(result[0]).toBeTypeOf("number");
});

it("should throw an error if an empty string is provided", () => {
	const stringNumbers = ["", "5"];
	const resultFn = () => cleanNumber(stringNumbers);

	expect(resultFn).toThrow();
});
