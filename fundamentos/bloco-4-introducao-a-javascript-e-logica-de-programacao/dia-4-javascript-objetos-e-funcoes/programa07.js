// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];
let indexValue = 0;

for (let index = 0; index < array.length; index += 1) {
  if (indexValue <= array[index]) {
    indexValue = index;
  }
}

console.log(indexValue);
