// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;


for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let arithmetic = sum / numbers.length;

console.log(arithmetic);
