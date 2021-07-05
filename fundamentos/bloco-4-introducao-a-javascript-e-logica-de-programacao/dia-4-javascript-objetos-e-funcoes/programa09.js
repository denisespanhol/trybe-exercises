// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function toCompareCaracteres(array, caracteres, biggerName) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length >= caracteres) {
      caracteres = array[index].length;
      biggerName = array[index];
    }
  }
  return biggerName;
}

let result = toCompareCaracteres(names, 0, '');

console.log(result);
