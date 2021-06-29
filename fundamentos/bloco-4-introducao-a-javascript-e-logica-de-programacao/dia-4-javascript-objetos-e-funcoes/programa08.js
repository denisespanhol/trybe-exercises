// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array = [2, 4, 6, 7, 10, 0, -3];
let indexValue = 0;
let arrayValue = 0

for (let index = 0; index < array.length; index += 1) {
  if (arrayValue === 0) {
    arrayValue = array[index];
  } else if (arrayValue >= array[index]) {
    indexValue = index;
  }
}

console.log(indexValue);

