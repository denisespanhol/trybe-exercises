// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numbers = [2, 4, 6, 7, 10, 0, -3];

function toCompareValor(indexValue, arrayValue, array) {
  for (let index = 0; index < array.length; index += 1) {
    if (arrayValue === 0) {
      arrayValue = array[index];
    } else if (arrayValue >= array[index]) {
      indexValue = index;
    }
  }
  return indexValue;
}

let result = toCompareValor(0, 0, numbers);

console.log(result);
