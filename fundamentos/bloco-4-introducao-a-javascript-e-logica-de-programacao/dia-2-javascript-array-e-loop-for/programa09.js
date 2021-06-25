// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

let array = []

for (array = [1]; array.length < 25; array.push(array.length + 1)) {
    
}

for (let index = 0; index < array.length; index += 1) {
  console.log(array[index] / 2);
}
