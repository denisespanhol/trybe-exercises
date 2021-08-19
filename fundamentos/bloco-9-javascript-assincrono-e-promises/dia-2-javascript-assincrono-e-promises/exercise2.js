// 2. Agora, um passo para trás: vamos fazer, passo a passo, uma Promise.
// Primeiramente, instancie uma Promise.
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.

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
.then(result => console.log(`Olha só! O número foi menor que 8000! Foi ${result}!`))
.catch(result => console.log(`Vixe! O número foi maior que 8000! Foi ${result}!`));
