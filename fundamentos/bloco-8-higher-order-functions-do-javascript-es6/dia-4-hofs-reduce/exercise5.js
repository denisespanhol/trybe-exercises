// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const characteres = names.join('').split('');
  let counter = 0;

  const reducer = (accumulator, currentValue) => currentValue.toLowerCase() === 'a' ? counter += 1 : counter;

  characteres.reduce(reducer, 0);
  return counter;
}

assert.deepStrictEqual(containsA(), 20);
