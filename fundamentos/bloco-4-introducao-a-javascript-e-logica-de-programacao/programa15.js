// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 10000.00
let descontoINSS;
let salarioBase;
let impostoDeRenda;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  descontoINSS = (salarioBruto * 8) / 100;
  salarioBase = salarioBruto - descontoINSS;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  descontoINSS = (salarioBruto * 9) / 100;
  salarioBase = salarioBruto - descontoINSS;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  descontoINSS = (salarioBruto * 11) / 100;
  salarioBase = salarioBruto - descontoINSS;
}
else if (salarioBruto > 5189.82) {
  descontoINSS = 570.88;
  salarioBase = salarioBruto - descontoINSS;
}

if (salarioBase <= 1903.98) {
  impostoDeRenda = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  impostoDeRenda = ((salarioBase * 7.5) / 100) - 142.80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  impostoDeRenda = ((salarioBase * 15) / 100) - 354.80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  impostoDeRenda = ((salarioBase * 22.5) / 100) - 636.13;
}
else if (salarioBase > 4664.68) {
  impostoDeRenda = ((salarioBase * 27.5) / 100) - 869.36;
}

salarioLiquido = salarioBase - impostoDeRenda;

console.log(salarioLiquido);
