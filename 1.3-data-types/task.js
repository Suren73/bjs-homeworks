"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {

	if (isNaN(percent)) {
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

	const n = (date.getFullYear() - new Date().getFullYear()) * 12;
	if (n <= 0) {
		return `Параметр "Дата" содержит неправельное значение "${date}"`;
	}
	const S = amount - contribution;
	const P = 1 / 12 * percent / 100;
	if (P <= 0) {
		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
	}
	const payment = S * (P + P / (((1 + P) ** n) - 1));
	const totalAmount = parseFloat((payment * n).toFixed(2));
	console.log(totalAmount);
	return totalAmount;
}

function getGreeting(name) {

	return `Привет, мир! Меня зовут ${name || "Аноним"}`;
}