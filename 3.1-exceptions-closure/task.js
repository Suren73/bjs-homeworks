'use strict';
function parseCount(value) {
	const parsed = Number.parseInt(value);
	if (isNaN(parsed)) {
		throw new Error('Невалидное значение');
	} else {
		return parsed;
	}
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if ((a + b) > c && (a + c) > b && (b + c) > a) {
			this.a = a;
			this.b = b;
			this.c = c;
		} else {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}
	getPerimeter() {
		return this.a + this.b + this.c;
	}
	getArea() {
		const p = this.getPerimeter() / 2;
		return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
	}
}

function getTriangle(a, b, c) {

	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			getPerimeter: () => 'Ошибка! Треугольник не существует',
			getArea: () => 'Ошибка! Треугольник не существует',
		}
	}
}