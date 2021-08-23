// 3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

const findUserById = require('./exercise3');

describe('When the worker exists', () => {
  it('it should return the worker', async () => {
    const worker = await findUserById(1);
    expect(worker.name).toEqual('Mark');
    expect(worker.id).toEqual(1);
  });

  it('When the worker not exist', async () => {
    expect.assertions(1);
    try {
      await findUserById(5);
    } catch (error) {
      expect(error).toEqual(new Error('User with 5 not found.'))
    }
  });
});
