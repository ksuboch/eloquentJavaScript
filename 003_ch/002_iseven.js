// Мы видели, что оператор % (остаток от деления) может использоваться для 
// определения того, чётное ли число ( % 2). А вот ещё один способ определения:
// Ноль чётный.
// Единица нечётная.
// У любого числа N чётность такая же, как у N - 2.
// Напишите рекурсивную функцию isEven согласно этим правилам. 
// Она должна принимать число и возвращать булевское значение.

function isEven(x) {
	
	if x < 0 {
		x = Math.abs(x);
	}
	
	switch (x) {
		case 0:
			return true;
			break;
		case 1:
			return false;
			break;
		default:
			return isEven(x - 2);
			break;		
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));