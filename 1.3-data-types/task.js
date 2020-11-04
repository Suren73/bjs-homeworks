"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {

	if (!!percent) {

	} else {
		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
	}

	if (isNaN(contribution)) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	}

	if (isNaN(amount)) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	}

	if (isNaN(date)) {
		return `Параметр "Дата" содержит неправильное значение "${date}"`;
	}

	let n = (date.getFullYear() - new Date().getFullYear()) * 12;
	if (n <= 0) {
		return `Параметр "Дата" содержит неправельное значение "${date}"`;
	}
	let S = amount - contribution;
	let P = 1 / 12 * percent / 100;
	let payment = S * (P + P / (((1 + P) ** n) - 1));
	let totalAmount = parseFloat((payment * n).toFixed(2));
	console.log(totalAmount);
	return totalAmount;
}

function getGreeting(name) {
	if (!!name) {
		name = name;
	} else {
		name = "Аноним";
	}
	let greeting = `Привет, мир! Меня зовут ${name}`;
	console.log(greeting);
	return greeting;
}