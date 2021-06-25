// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. Atente que, sobre o custo do produto, incide um imposto de 20%. Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

let productPrice = 600;
let sellingPrice = 950;
let productImpost = (600 * 20) / 100;
let productTotalPrice = productPrice + productImpost;

let lucre = (sellingPrice - productTotalPrice) * 1000;

if (productPrice < 0 || sellingPrice < 0) {
  console.log('Erro: o sistema não computa valores negativos.')
}
else {
  console.log(lucre);
}
