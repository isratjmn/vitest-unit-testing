export function add(numbers) {
	let sum = 0;
	// throw new Error("Something Went Wrong !!");
	for (const number of numbers) {
		sum += +number;
	}
	return sum;
}

