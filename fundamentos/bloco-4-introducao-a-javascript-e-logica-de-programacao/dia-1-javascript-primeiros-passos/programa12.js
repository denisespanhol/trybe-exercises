// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

let number1 = 25;
let number2 = 63;
let number3 = 97;

if ((number1 % 2) === 0 || (number2 % 2) === 0 || (number3 % 2) === 0) {
    console.log(true);
}
else {
    console.log(false);
}
