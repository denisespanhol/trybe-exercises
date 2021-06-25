// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

let percent = 95;

if (percent >= 90 && percent <= 100) {
  console.log('Nota A');
}
else if (percent >= 80 && percent < 90) {
  console.log('Nota B');
}
else if (percent >= 70 && percent < 80) {
  console.log('Nota C');
}
else if (percent >= 60 && percent < 70) {
  console.log('Nota D');
}
else if (percent >= 50 && percent < 60) {
  console.log ('Nota E');
}
else if (percent < 0 || percent > 100) {
  console.log('Erro no sistema: Nota inválida.');
}
else {
  console.log('Nota F');
}
