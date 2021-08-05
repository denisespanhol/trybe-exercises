// 2. Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const assert = require('assert');

// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
