// 4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const myFizzBuzz = require('./exercise4');

describe('Exercise 4', () => {
  it('should be the calls return fizzbuzz with a number divisible by 3 and 5', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });

  it('should be the calls return fizz with a number divisible by 3', () => {
    expect('fizz').toBe(myFizzBuzz(9));
  });

  it('should be the calls return buzz with a number divisible by 5', () => {
    expect('buzz').toBe(myFizzBuzz(20));
  });

  it('should be the calls return the same number if its not divisible by 3 and 5', () => {
    expect(7).toBe(myFizzBuzz(7));
    expect(11).toBe(myFizzBuzz(11));
    expect(2).toBe(myFizzBuzz(2));
  });

  it('should be the calls return false if the valor is not a number', () => {
    expect(false).toBe(myFizzBuzz('15'));
  });
});
