// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let numbers = [2, 3, 2, 5, 8, 2, 3];

function toCompareRepetition(array, repetitiveNumber, n1, n2, n3, n4, n5, n6, n7) {

	n1 = 0;
	n2 = 0;
	n3 = 0;
	n4 = 0;
	n5 = 0;
	n6 = 0;
	n7 = 0;

	for (let index = 0; index < array.length; index += 1) {
		if (array[0] === array[index]) {
			n1 += 1;
		} else if (array[1] === array[index]) {
			n2 += 1;
		} else if (array[2] === array[index]) {
			n3 += 1;
		} else if (array[3] === array[index]) {
			n4 += 1;
		} else if (array[4] === array[index]) {
			n5 += 1;
		} else if (array[5] === array[index]) {
			n6 += 1;
		} else if (array[6] === array[index]) {
			n7 += 1;
		}

		if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5 && n1 >= n6 && n1 >= n7) {
			repetitiveNumber = array[0];
		} else if (n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5 && n2 >= n6 && n2 >= n7) {
			repetitiveNumber = array[1];
		} else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5 && n3 >= n6 && n3 >= n7) {
			repetitiveNumber = array[2];
		} else if (n4 >= n1 && n4 >= n2 && n4 >= n3 && n4 >= n5 && n4 >= n6 && n4 >= n7) {
			repetitiveNumber = array[3];
		} else if (n5 >= n1 && n5 >= n2 && n5 >= n3 && n5 >= n4 && n5 >= n6 && n5 >= n7) {
			repetitiveNumber = array[4];
		} else if (n6 >= n1 && n6 >= n2 && n6 >= n3 && n6 >= n4 && n6 >= n5 && n6 >= n7) {
			repetitiveNumber = array[5];
		} else if (n7 >= n1 && n7 >= n2 && n7 >= n3 && n7 >= n4 && n7 >= n5 && n7 >= n6) {
			repetitiveNumber = array[6];
		}
	}
	return repetitiveNumber;
}

let result = toCompareRepetition(numbers);

console.log(result);
