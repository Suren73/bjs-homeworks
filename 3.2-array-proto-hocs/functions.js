'use strict';
console.clear();
console.log("Hello");
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
	return weapons.map(obj => obj.name);
};

function getCountReliableWeapons(durability) {
	return weapons.filter(obj => obj.initDurability > durability).length;
}

function hasReliableWeapons(durability) {
	return weapons.some(obj => obj.initDurability > durability);
}

function getReliableWeaponsNames(durability) {
	return weapons.filter(obj => obj.initDurability > durability).map(obj => obj.name);
}

function getTotalDamage() {
	return weapons.reduce((sum, obj) => sum + obj.attack, 0);
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
