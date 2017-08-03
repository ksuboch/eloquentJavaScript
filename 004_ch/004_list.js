// Напишите функцию arrayToList, которая строит список, получая в качестве 
// аргумента массив, а также функцию listToArray, которая создаёт массив 
// из списка. Также напишите вспомогательную функцию prepend, которая получает 
// элемент и создаёт новый список, где этот элемент добавлен спереди к 
// первоначальному списку, и функцию nth, которая в качестве аргументов 
// принимает список и число, а возвращает элемент на заданной позиции в списке 
// или же undefined в случае отсутствия такого элемента.
// Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.

function arrayToList(arr) {
  var lst = null;
  while (arr.length > 0) {
    lst = prepend(arr.pop(), lst);
  }
  return lst;
}

console.log(arrayToList([10, 20]));


function listToArray(lst) {
  arr = [];
  while (lst) {
    arr.push(lst.value);
    lst = lst.rest;
  }
  return arr;
}

console.log(listToArray(arrayToList([10, 20, 30])));


function prepend(val, lst) {
  return {
    value: val,
    rest: lst
  }
}

console.log(prepend(10, prepend(20, null)));


function nth(lst, n) {
  if (n)
    return nth(lst.rest, n-1)
  else
    return lst.value;
}

console.log(nth(arrayToList([10, 20, 30]), 1));