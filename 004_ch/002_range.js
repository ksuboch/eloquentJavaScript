// Напишите функцию range, принимающую два аргумента – начало и конец диапазона – 
// и возвращающую массив, который содержит все числа из него, включая начальное 
// и конечное.
// Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
// Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
// В качестве бонуса дополните функцию range, чтобы она могла принимать 
// необязательный третий аргумент – шаг для построения массива. Если он не задан, 
// шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть 
// [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, 
// что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

function simplleRange(start, end) {
  var result = [];
  for (var i = start; i <= end; i++)
    result.push(i)
  return result;
}

console.log(simplleRange(1, 5));


function sum(range) {
  if (range.length) {
    var acc = 0;
    for (var i = 0; i < range.length; i++)
      acc += range[i];
  }
  return acc;
}

console.log(sum([]));
console.log(sum(simplleRange(1, 5)));


function range(start, end, step) {
  step = step || 1;
  result = [];
  for (var i = 0; i <= ((end - start) - ((end - start) % step )) / step; i++) {
    result.push(start + i * step);
  }
  return result;
}

console.log(range(5, 2, -1))