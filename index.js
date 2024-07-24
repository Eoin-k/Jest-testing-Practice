const capitalise = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = (str) => {
	return str.split("").reverse().join("");
};

const calculator = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		return a - b;
	},
	divide: function (a, b) {
		return a / b;
	},
	multiply: function (a, b) {
		return a * b;
	},
};

const cesarCipher = (string, shiftVal) => {
	let output = "";
	for (let i = 0; i < string.length; i++) {
		let char = string[i].charCodeAt();
		if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
			char += shiftVal;
			if ((char > 90 && string[i] <= "Z") || char > 122) {
				char -= 26;
			}
		}
		output += String.fromCharCode(char);
	}
	return output;
};

const analyseArray = (array) => {
	const min = Math.min.apply(null, array);
	const max = Math.max.apply(null, array);
	const length = array.length;
	const average = array.reduce((curr, prev) => curr + prev, 0) / length;
	return {
		average: average,
		length: length,
		max: max,
		min: min,
	};
};
module.exports = {
	reverseString: reverseString,
	capitalise: capitalise,
	calculator: calculator,
	cesarCipher: cesarCipher,
	analyseArray: analyseArray,
};
