"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
	if (isNaN(parseInt(percent))) {
		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
	}
	percent = parseFloat(percent);

	if (isNaN(parseInt(contribution))) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	}
	contribution = parseFloat(contribution);

	if (isNaN(parseInt(amount))) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	}
	amount = parseFloat(amount);

	if (isNaN(date)) {
		return `Параметр "Дата" содержит неправильное значение "${date}"`;
	}
	let n = (date.getFullYear() - new Date().getFullYear()) * 12;
	let S = amount - contribution;
	let P = (1 / 12) * (percent / 100);
	let payment = S * (P + P / (((1 + P) ** n) - 1));
	let totalAmount = parseFloat((payment * n).toFixed(2));

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