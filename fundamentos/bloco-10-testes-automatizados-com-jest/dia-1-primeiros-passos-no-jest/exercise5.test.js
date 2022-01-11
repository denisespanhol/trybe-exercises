// 5. Compare dois objetos para verificar se são idênticos ou não

const exercise5 = require('./exercise5');
const { obj1, obj2, obj3 } = exercise5;

describe('Compare if two objects are equal or not', () => {
  it('should be true if some obj as the same than another one', () => {
    expect(true).toStrictEqual(obj1 === obj2);
    expect(true).toStrictEqual(obj1 === obj3);
    expect(true).toStrictEqual(obj2 === obj3);
  });
});
