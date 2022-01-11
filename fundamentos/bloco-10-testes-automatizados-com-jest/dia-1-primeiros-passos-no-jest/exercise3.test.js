// 3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const myRemoveWithoutCopy = require('./exercise3');

describe('Exercise 3', () => {
  it('should be returned the expected array if the call will be myRemoveWithoutCopy([1, 2, 3, 4], 3)', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });

  it('should not be returned the array [1, 2, 3, 4] if the call will be myRemoveWithoutCopy([1, 2, 3, 4], 3)', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });

  it('should be verify if the array pass by parameter was altered', () => {
    expect('object').toBe(typeof myRemoveWithoutCopy([1, 2, 3, 4], 3));
    expect('number').toBe(typeof ([1, 2, 3, 4], 3));
  });

  it('should be verify if the call myRemoveWithoutCopy([1, 2, 3, 4], 5) returns the expected array', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
  });
});
