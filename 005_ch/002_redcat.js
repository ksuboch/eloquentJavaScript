// Используйте метод reduce в комбинации с concat для свёртки массива массивов 
// в один массив, у которого есть все элементы входных массивов.

var arrays = [[1, 2, 3], [4, 5], [6]];

function redcat(array) {
  return array.reduce(function(a, b) {
    return a.concat(b);
  }, array[0]);
}

console.log(redcat(arrays));


