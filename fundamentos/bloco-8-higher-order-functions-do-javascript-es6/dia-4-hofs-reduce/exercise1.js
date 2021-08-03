// 1. Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let onlyOneArray = [];
  const reducer = (accumulator, currentValue, index) => currentValue.reduce((acc, cur) => onlyOneArray.push(cur), 0);

  arrays.reduce(reducer, 0);

  return onlyOneArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
