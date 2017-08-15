// Разработайте интерфейс, абстрагирующий проход по набору значений. 
// Объект с таким интерфейсом представляет собой последовательность, а интерфейс 
// должен давать возможность в коде проходить по последовательности, работать 
// со значениями, которые её составляют, и как-то сигнализировать о том, что мы 
// достигли конца последовательности.
// Задав интерфейс, попробуйте сделать функцию logFive, которая принимает 
// объект-последовательность и вызывает console.log для первых её 
// пяти элементов – или для меньшего количества, если их меньше пяти.
// Затем создайте тип объекта ArraySeq, оборачивающий массив, и 
// позволяющий проход по массиву с использованием разработанного 
// вами интерфейса. Создайте другой тип объекта, RangeSeq, который проходит 
// по диапазону чисел (его конструктор должен принимать аргументы from и to).

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}
ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

function RangeSeq(from, to) {
  this.from = from;
  this.to   = to;
  this.cur  = from - 1;
}
RangeSeq.prototype.next = function() {
  if (this.cur > this.to)
    return false;
  this.cur++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.cur;
};

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));