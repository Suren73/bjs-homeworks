'use strict';
console.clear();
console.log("Hello");
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
	const nameList = weapons.map(obj => obj.name);
	return nameList;
};

function getCountReliableWeapons(durability) {
	const countReliableWeapons = weapons.filter(obj => obj.initDurability > durability);
	return countReliableWeapons.length;
}

function hasReliableWeapons(durability) {
	return weapons.some(obj => obj.initDurability > durability);
}

function getReliableWeaponsNames(durability) {
	const countReliableWeapons = weapons.filter(obj => obj.initDurability > durability);
	const nameList = countReliableWeapons.map(obj => obj.name);
	return nameList;
}

function getTotalDamage() {
	const totalDamage = weapons.reduce((sum, obj) => sum + obj.attack, 0);
	return totalDamage;
}

function getValuestCountToSumValues(arr, num) {
	let sum = 0;
	let result = arr.filter((item, index, arr) => {
		sum += item;
		return sum <= num;
	})
	return result;
}

function getValuestCountToSumValues(arr, num) {
	const len = arr.length;
	let sum = 0;
	const sumArr = arr.reduce((previousValue, current) => previousValue + current);
	arr.reverse();
	const result = arr.filter((item) => {
		sum += item;
		return (sumArr - sum) >= num;
	})
	return (len === 0) ? len : len - result.length;
}
