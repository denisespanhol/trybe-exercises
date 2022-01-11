// 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const myRemove = require('./exercise2');

describe('Exercise 2', () => {
  it('Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Testa se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Testa se o array passado por parâmetro não sofreu alterações', () => {
    expect('object').toBe(typeof myRemove([1, 2, 3, 4], 3));
    expect('number').toBe(typeof ([1, 2, 3, 4], 3));
  });

  it('Testa se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});