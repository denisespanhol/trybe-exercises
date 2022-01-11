// 1. Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = require('./exercise1');

describe('exercise1', () => {
  it('should be verify the call of the callback function uppercase', (done) => {
    uppercase('funcionou', (response) => {
      try {
        expect(response).toBe('FUNCIONOU');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
});
