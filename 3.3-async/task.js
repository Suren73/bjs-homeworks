const checkDelay = (index, delay) => {
	const start = new Date();
	setTimeout(() => {
		console.log('Добрый день, я консольный бог!');
		const end = new Date();
		const realDelay = end - start;
		console.log(`${index}: Задержка между вызовом : ${realDelay} мс`);
	}, delay);
}
for (let i = 0; i < 10; i++) {
	checkDelay(i, 1000);
}
// const showGreeting = () => console.log('Добрый день, я консольный бог!');
// setTimeout(showGreeting);

// const idle = n => {
// 	let sum = 0;
// 	for (let i = 0; i < n; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }
// for (let i = 0; i < 10; i++) {
// 	checkDelay(i, 10);
// 	idle(1000000);
// }