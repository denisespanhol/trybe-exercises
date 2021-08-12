// 3. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

const randomNumbers = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const fiftyToSquare = () => {
  const fiftyNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    if (index < 10) {
      fiftyNumbers.push(randomNumbers(1, 50) ** 2);
    }
  }
  return fiftyNumbers.reduce((acc, curr) => acc + curr, 0)
}

const promise = new Promise((resolve, reject) => {
  const result = fiftyToSquare();
  if (result < 8000) {
    resolve(result);
  }
  reject(result);
})
.then(result => {
  const divisors = [result / 2, result / 3, result / 5, result / 10];
  return console.log(divisors);
})
.catch(result => console.log(`Vixe! O número foi maior que 8000! Foi ${result}!`));
