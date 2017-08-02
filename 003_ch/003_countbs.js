// Напишите функцию countBs, которая принимает строку в качестве аргумента, 
// и возвращает количество символов “B”, содержащихся в строке.
// Затем напишите функцию countChar, которая работает примерно как countBs, 
// только принимает второй параметр — символ, который мы будем искать в строке 
// (вместо того, чтобы просто считать количество символов “B”). 
// Для этого переделайте функцию countBs.

function countBs(inputStr) {
	result = 0;
	for (var i = 0; i < inputStr.length; i++) {
		if (inputStr[i] == "B") {
			result++;
		}
	}
	return result;
}

console.log(countBs("ABRBBJBGGBDB"));

function countChars(inputStr, char) {
	result = 0;
	for (var i = 0; i < inputStr.length; i++) {
		if (inputStr[i] == char) {
			result++;
		}
	}
	return result;
}

console.log(countChars("ABRBBJBGGBDB", "D"));