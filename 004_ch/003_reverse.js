// Напишите две функции, reverseArray и reverseArrayInPlace. 
// Первая получает массив как аргумент и выдаёт новый массив – 
// с обратным порядком элементов. Вторая работает как оригинальный метод 
// reverse – она меняет порядок элементов на обратный в том массиве, 
// который был ей передан в качестве аргумента. 
// Не используйте стандартный метод reverse.

function reverseArray(arr) {
  reversed = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray(["A", "B", "C"]));


function reverseInPlace(arr) {
  var a = 0;
  var b = arr.length - 1;
  var tmp;
  while (a < b) {
    tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
    a += 1;
    b -= 1;
  }
}

var arrayValue = [1, 2, 3, 4, 5];
reverseInPlace(arrayValue);
console.log(arrayValue);

var arrayValue2 = [1, 2, 3, 4, 5, 6];
reverseInPlace(arrayValue2);
console.log(arrayValue2);