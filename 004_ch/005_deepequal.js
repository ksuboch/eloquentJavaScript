// Напишите функцию deepEqual, которая принимает два значения и возвращает true, 
// только если это два одинаковых значения или это объекты, 
// свойства которых имеют одинаковые значения, если их сравнивать рекурсивным 
// вызовом deepEqual.

function deepEqual(obj1 ,obj2) {
  if (obj1 === null | obj2 == null) {
    return obj1 === obj2;
  }

  if (typeof obj1 !== "object" | typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  for (var prop in obj1) {
    if (prop in obj2) {
      if (!deepEqual(obj1[prop], obj2[prop])) {
        return false;
      }
    }
    else {
      return false;
    }
  }

  return true;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));