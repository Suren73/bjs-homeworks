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
		const P = this.a + this.b + this.c;
		return P;
	}
	getArea() {
		const p = this.getPerimeter() / 2;
		const S = +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
		return S;
	}
}

function getTriangle(a, b, c) {

	try {
		const triangle = new Triangle(a, b, c);
		return triangle;
	} catch (error) {
		const triangle = new Object();
		triangle.getPerimeter = function () {
			return 'Ошибка! Треугольник не существует';
		};
		triangle.getArea = function () {
			return 'Ошибка! Треугольник не существует';
		}
		return triangle;
	}
}