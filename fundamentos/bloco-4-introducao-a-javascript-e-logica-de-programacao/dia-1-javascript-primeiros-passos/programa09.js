// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angle1 = 50;
let angle2 = 70;
let angle3 = 60;

if ((angle1 + angle2 + angle3) === 180) {
    console.log(true);
}
else if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    console.log('Erro no sistema: ângulo inválido.');
}
else {
    console.log(false);
}
