// Напишите функцию min, принимающую два аргумента, 
// и возвращающую минимальный из них.

function min(val1, val2) {
	return (val1 < val2 ? val1 : val2);
}

console.log(min(0, 10));
console.log(min(0, -10));