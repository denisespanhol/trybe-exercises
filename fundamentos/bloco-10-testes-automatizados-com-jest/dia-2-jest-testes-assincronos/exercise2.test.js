// 2. Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

const findUserById = require('./exercise2');

describe('When the worker exists', () => {
  it('it should return the worker', () => (
    findUserById(1).then((worker) => {
      expect(worker.name).toEqual('Mark');
      expect(worker.id).toEqual(1);
    })
  ));
});

describe('When the worker not exists', () => {
  it('it should not return the worker', () => (
    findUserById(5).catch((error) => (
      expect(error.message).toMatch('User with 5 not found.')
    ))
  ));
});
