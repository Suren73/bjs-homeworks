'use strict';
function sleep(milliseconds) {
	let e = new Date().getTime() + milliseconds;
	while (new Date().getTime() <= e) { }
}

function sum(...args) {
	sleep(100);
	return args.reduce((sum, arg) => {
		return sum += +arg;
	}, 0);
}

function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function memorize(fn, limit) {
	const memory = [];
	return function (...args) {
		let arr = args;
		let prop = memory.find(obj => compareArrays(obj.args, arr));
		if (prop) {
			return prop.result;
		}
		let result = fn(...args);
		memory.push({ args, result })
		if (memory.length > limit) {
			memory.shift();
		}
		return result;
	}
}