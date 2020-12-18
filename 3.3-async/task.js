'use strict';
class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	addClock(time, callback, id) {
		if (!!!id) {
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
		}
		if (this.alarmCollection.find(alarm => alarm.id === id)) {
			console.error('Будильник с таким id уже существует');
			return;
		}
		this.alarmCollection.push({ id, time, callback });
	}
	removeClock(id) {
		let result = this.alarmCollection.some((alarm) => alarm.id === id);
		this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.id !== id);
		return result;
	}
	getCurrentFormattedTime() {
		return new Date().toTimeString().slice(0, 5);
	}
	start() {
		let newTime = this.getCurrentFormattedTime();
		function checkClock(alarm, newTime) {
			if (alarm.time === newTime) {
				alarm.callback();
			}
		}
		if (!this.time) {
			this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm, newTime)), 2000);
		}
	}
	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
		}
		this.timerId = null;
	}
	printAlarms() {
		console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
		this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`));
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}
function testCase() {
	let clock = new AlarmClock();
	clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора вставать"), 1);
	clock.start();

	setTimeout(() => {
		clock.stop();
	}, 10000);

	setTimeout(() => {
		clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Давай вставай уже!"), 2);
		clock.start();
		setTimeout(() => {
			clock.stop();
			clock.removeClock(2);
		}, 2000);
	}, 60000);

	setTimeout(() => {
		clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Вставай, а то проспишь!"), 2);
		clock.start();
		setTimeout(() => {
			clock.stop();
			clock.clearAlarms();
			clock.printAlarms();
		}, 2000);

	}, 120000);
}