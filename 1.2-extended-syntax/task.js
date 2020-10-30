"use strict";

function getResult(a, b, c) {
	let x = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant > 0) {
		x[0] = (-b + discriminant ** 0.5) / (2 * a);
		x[1] = (-b - discriminant ** 0.5) / (2 * a);
	} else if (discriminant === 0) {
		x[0] = -b / (2 * a);
	}
	return x;
}

function getAverageMark(marks) {
	let len = marks.length;
	let averageMark = 0;
	let markSum = 0;
	let numberMarks = 5;
	if (len === 0) {
		return averageMark;
	} else if (len > numberMarks) {
		console.log(`Количество оценок больше ${numberMarks}`);
		marks.splice(numberMarks);
		len = numberMarks;
	}
	for (let mark of marks) {
		markSum += mark;
	}
	averageMark = markSum / len;
	return averageMark;
}

function askDrink(name, dateOfBirthday) {
	let year = new Date().getFullYear();
	let yearBirthday = dateOfBirthday.getFullYear();
	let result = ((year - yearBirthday) >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
	return result;
}