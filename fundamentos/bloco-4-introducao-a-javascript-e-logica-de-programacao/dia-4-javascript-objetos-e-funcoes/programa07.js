// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numbers = [2, 3, 6, 7, 10, 1];

function toCompareValor(indexValue, array) {
  for (let index = 0; index < array.length; index += 1) {
    if (indexValue <= array[index]) {
      indexValue = index;
    }
  }
  return indexValue
}

let result = toCompareValor(0, numbers);

console.log(result);
