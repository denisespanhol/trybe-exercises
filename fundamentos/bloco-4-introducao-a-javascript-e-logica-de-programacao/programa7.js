// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let number1 = 101;
let number2 = 56;
let number3 = 150.5;

if (number1 > number2 && number1 > number3) {
    console.log('O maior dos três números é o ' + number1);
}
else if (number2 > number1 && number2 > number3) {
    console.log('O maior dos três números é o ' + number2);
}
else {
    console.log('O maior dos três números é o ' + number3);
}
