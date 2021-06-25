// Utilizando for , descubra qual o menor valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lesserNumber = -1;

for (let index = 0; index < numbers.length; index += 1) {
  if (lesserNumber < 0) {
    lesserNumber = numbers[index];
  }
  else if (numbers[index] < lesserNumber) {
    lesserNumber = numbers[index];
  }
}

console.log(lesserNumber);
