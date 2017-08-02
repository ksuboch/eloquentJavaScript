// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######

pattern = "#"
for (var i = 0; i <= 6; i++) {
	resultStr = "";
	for (var j = 0; j <= i; j++) {
		resultStr += pattern;
	}
	console.log(resultStr);
}