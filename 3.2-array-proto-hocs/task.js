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
		let arr = Array.from(args);
		let result = 0;
		let len = memory.length;
		let prop = memory.find(obj => compareArrays(obj.args, arr));
		if (prop) {
			return prop.result;
		}
		else {
			result = fn(...args);
			memory.push({ 'args': arr, 'result': result })
			if (len > limit) {
				memory.shift();
			}
			return result;
		}
	}
}