// 5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

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
  new Promise((resolve, reject) => {
    const sumDivisors = divisors.reduce((acc, curr) => acc + curr, 0);
    resolve(sumDivisors);
  })
  .then(sumDivisors => console.log(`Os elementos, divididos e somados, são igual a: ${sumDivisors.toFixed(2)}!`));
})
.catch(result => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
