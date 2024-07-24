const formulas = require("./index.js");

test("first string letter to be capitalised", () => {
	expect(formulas.capitalise("paint")).toBe("Paint");
});

test("to be reversed", () => {
	expect(formulas.reverseString("st")).toBe("ts");
});

test("Reverse string", () => {
	expect(formulas.reverseString("abcd")).toBe("dcba");
});

test("add 2 numbers", () => {
	expect(formulas.calculator.add(2, 2)).toBe(4);
});

test("subtract 2 numbers", () => {
	expect(formulas.calculator.subtract(5, 3)).toBe(2);
});

test("divide 2 numbers", () => {
	expect(formulas.calculator.divide(12, 3)).toBe(4);
});

test("multiply 2 numbers", () => {
	expect(formulas.calculator.multiply(5, 3)).toBe(15);
});

test("Cesar shift 1", () => {
	expect(formulas.cesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Cesar shift 2", () => {
	expect(formulas.cesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Cesar shift 3", () => {
	expect(formulas.cesarCipher("The Odin Project is useful", 3)).toBe(
		"Wkh Rglq Surmhfw lv xvhixo",
	);
});

test("Array analysis", () => {
	let object = formulas.analyseArray([1, 6, 9, 12, 66, 555, 22, 5]);
	expect(object).toEqual({
		average: 84.5,
		length: 8,
		max: 555,
		min: 1,
	});
});
