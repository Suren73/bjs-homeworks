function getSolutions(a, b, c) {

	const D = b ** 2 - 4 * a * c;
	let solutions = {};
	solutions.D = D;
	solutions.roots = [];
	if (D > 0) {
		solutions.roots[0] = (-b + Math.sqrt(D)) / (2 * a);
		solutions.roots[1] = (-b - Math.sqrt(D)) / (2 * a);
	} else if (D === 0) {
		solutions.roots[0] = -b / (2 * a);
	}
	return solutions;

}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c)
	console.log(`Вычисляем корни квадратного выражения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		console.log(`Уравнение не имеет вещественных корней`);
	} else if (result.D === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}
showSolutionsMessage(2, 4, 2);
console.log('');

function getAverageScore(data) {
	let newData = {};
	let average = 0;
	let n = 0;
	for (let prop in data) {
		let marks = data[prop];
		let value = getAverageMark(marks);
		average += value;
		n += 1;
		newData[prop] = value;
	};
	if (n === 0) {
		newData.average = 0;
	} else {
		newData.average = average / n;
	}
	return newData;
}

function getAverageMark(marks) {
	let markSum = 0;
	if (marks.length === 0) {
		return 0;
	}
	for (let mark of marks) {
		markSum += mark;
	}
	return markSum / marks.length;
}
console.log(getAverageScore({ algebra: [1, 2] }));
console.log('');

function getPersonData(secretData) {
	newSecretData = {};
	for (let prop in secretData) {
		let secret = secretData[prop];
		console.log(secret);

		if (prop === "aaa") {
			variable = "firstName";
		} else {
			variable = "lastName";
		}
		let value = getDecodedValue(secret);
		console.log(value);
		newSecretData[variable] = value;
	}
	return newSecretData;
}
function getDecodedValue(secret) {
	let value = (secret) ? "Эмильо" : "Родриго";
	return value;
}
console.log(getPersonData({ aaa: 0, bbb: 0 }));
console.log(getPersonData({ aaa: 1, bbb: 0 }));
console.log(getPersonData({ aaa: 0, bbb: 1 }));
console.log(getPersonData({ aaa: 1, bbb: 1 }));