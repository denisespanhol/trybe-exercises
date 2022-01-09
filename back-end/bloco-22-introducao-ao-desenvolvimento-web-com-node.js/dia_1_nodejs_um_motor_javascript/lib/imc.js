const { question, questionFloat } = require('readline-sync');

const imcCalc = () => {
  const name = question('Qual seu nome? ');
  const weight = questionFloat('Qual seu peso? ');
  const height = questionFloat('Qual sua altura? ');

  const imc = (weight / (height ^ 2)).toFixed(2);

  const situation = {
    1: 'Abaixo do peso (magreza)',
    2: 'Peso normal',
    3: 'Acima do peso (sobrepeso)',
    4: 'Obesidade grau I',
    5: 'Obesidade grau II',
    6: 'Obesidade graus III e IV',
    7: 'Imc não válido'
  }

  let situationResult = situation[1];
  if (imc > 18.5 && imc < 25) situationResult = situation[2];
  if (imc >= 25 && imc < 30) situationResult = situation[3];
  if (imc >= 30 && imc < 35) situationResult = situation[4];
  if (imc >= 35 && imc < 40) situationResult = situation[5];
  if (imc >= 40) situationResult = situation[6];
  if (imc < 0) situationResult = situation[7];


  return `Ok, ${name}! O resultado do seu imc é ${imc}: ${situationResult}.`;
}

module.exports = imcCalc;
