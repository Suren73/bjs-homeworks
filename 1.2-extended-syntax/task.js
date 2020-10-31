"use strict";

function getResult(a, b, c) {
	let x = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant > 0) {
		x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
		x[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
	} else if (discriminant === 0) {
		x[0] = -b / (2 * a);
	}
	return x;
}

function getAverageMark(marks) {
	let markSum = 0;
	let numberMarks = 5;
	if (marks.length === 0) {
		return 0;
	} else if (marks.length > numberMarks) {
		console.log(`Количество оценок больше ${numberMarks}`);
		marks.splice(numberMarks);
	}
	for (let mark of marks) {
		markSum += mark;
	}
	return markSum / marks.length;
}

function askDrink(name, dateOfBirthday) {
	let result = ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
	return result;
}