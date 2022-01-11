// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.


const exercise1 = require('./exercise1.js');

exercise1(2, 3, 5)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));

exercise1(50, 70, 'a')
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));

exercise1(50, 70, 100)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));
