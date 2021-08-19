// 1. A função sum(a, b) retorna a soma do parâmetro a com o b.
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = require('./exercise1');

describe('Exercise 1', () => {
  it('A função testa se o retorno de sum(4, 5) é 9', () => {
    expect(9).toBe(sum(4, 5));
  });
});
