'use strict';
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100
console.log('');


class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15
console.log('');

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		// console.log(book.state);
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let prop = this.books.find(obj => obj[type] === value);
		if (prop) {
			return prop;
		}
		return null;
	}
	giveBookByName(bookName) {
		let prop = this.books.find(obj => obj.name === bookName);
		if (prop) {
			let index = this.books.indexOf(prop);
			let result = this.books.splice(index, 1);
			return result[0];
		}
		console.log(prop);
		return null;
	}
}

//Создайте библиотеку;
const library = new Library("Библиотека имени Ленина");
// Добавьте в библиотеку несколько печатных изданий различных типов;
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1919, 60));
// Найдите книгу, изданную в 1919 году (создайте такую книгу при необходимости);
console.log(library.findBookBy("releaseDate", 1919).name); //"Мурзилка"
// Выдайте любую книгу;
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
const timeMachine = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
// Испортите выданную книгу;
timeMachine.state = 30;
console.log(timeMachine.state);
// Почините выданную книгу;
timeMachine.fix();
console.log(timeMachine.state);
// Попытайтесь добавить починенную книгу обратно в библиотеку.
library.addBook(timeMachine);
console.log("Количество книг после добавления: " + library.books.length);
console.log('');

class StudentLog {
	constructor(name) {
		this.name = name;
		this.subjects = {};
	}

	getName() {
		return this.name;
	}

	addGrade(grade, subject) {
		if (!(subject in this.subjects)) {
			this.subjects[subject] = [];
		}
		if (grade > 0 && grade < 6) {
			this.subjects[subject].push(grade);
		} else {
			console.log(`Вы пытались поставить оценку "${grade}"  по предмету "${subject}". Допускаются только числа от 1 до 5.`);
		}
		return this.subjects[subject].length;
	}
	getAverageBySubject(subject) {
		let gradeSum = 0;
		if (!(subject in this.subjects)) {
			return 0;
		}
		for (let prop of this.subjects[subject]) {
			gradeSum += prop;
		}
		return gradeSum / this.subjects[subject].length

	}
	getTotalAverage() {
		let numberGrades = 0;
		let sum = 0;


		for (let prop in this.subjects) {
			for (let i = 0; i < this.subjects[prop].length; i++)
				sum += this.subjects[prop][i];
			numberGrades += this.subjects[prop].length;
		}
		return sum / numberGrades;
	}
}
// const log = new StudentLog('Олег Никифоров');
// console.log(log.getName()) // Олег Никифоров
// console.log(log.addGrade(3, 'algebra'));
// 1
// console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
// console.log(log.addGrade(4, 'algebra'));
// 2
// console.log(log.addGrade(5, 'geometry'));
// 1
// console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
// console.log("");
// const log = new StudentLog('Олег Никифоров');

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0
const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75

