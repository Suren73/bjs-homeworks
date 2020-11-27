'use strict';

String.prototype.isPalindrome = function () {
	let string = this;
	string = string.toLowerCase().split("");

	for (let i = 0; i < string.length; i++) {
		if (string[i] === " ") {
			string.splice(i, 1);
			i--;
		}
	}
	let str = string.join('');
	string = string.reverse().join('');
	return string === str;
}


function getAverageMark(marks) {

	let markSum = 0;
	if (marks.length === 0) {
		return 0;
	}
	for (let mark of marks) {
		markSum += mark;
	}
	const average = markSum / marks.length;
	const averageMark = Math.round(average);

	return averageMark;
}

function checkBirthday(birthday) {
	let now = Date.now();

	let data = new Date(birthday);
	const parsedBirthday = new Date(birthday).getTime();
	let diff = now - parsedBirthday;
	const year = 31536000000;
	let age = diff / year;
	let verdict = (age > 18);

	return verdict
}