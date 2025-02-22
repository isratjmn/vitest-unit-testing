

import { it, expect, beforeEach, beforeAll, describe } from "vitest";
import { User } from "./hooks";

const testEmail = "test@test.com";
let user;

beforeEach(() => {
	user = new User(testEmail);
});

describe("User class tests", () => {
	it("should have an email property", () => {
		expect(user).toHaveProperty("email");
	});

	it("should update the email", () => {
		const newTestEmail = "test2@test.com";
		user.updateEmail(newTestEmail);
		expect(user.email).toBe(newTestEmail);
	});

	it.concurrent("should store the provided email value", () => {
		expect(user.email).toBe(testEmail);
	});

	it.concurrent(
		"should still have an email property after clearing the email",
		() => {
			user.clearEmail();
			expect(user).toHaveProperty("email");
		}
	);
});
