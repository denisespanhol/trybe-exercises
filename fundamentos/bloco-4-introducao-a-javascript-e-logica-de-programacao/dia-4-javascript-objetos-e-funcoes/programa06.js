// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromoCheck (palavra) {
  if (palavra === palavra.split('').reverse().join('')) {
    console.log(true);
  } else {
    console.log(false);
  }
  return palavra;
}

palindromoCheck('arara');
