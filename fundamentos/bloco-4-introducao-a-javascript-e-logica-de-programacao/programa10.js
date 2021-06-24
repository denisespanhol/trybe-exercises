// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let chessPiece = 'BiSpO';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Anda uma casa em qualquer direção.');
    break;
  case 'rainha' || 'dama':
    console.log('Anda inúmeras casas em qualquer direção');
    break;
  case 'torre':
    console.log('Anda inúmeras casas em linhas retas');
    break;
  case 'bispo':
    console.log('Anda inúmeras casas em diagonais');
    break;
  case 'cavalo':
    console.log('Anda uma quantidade de casas suficiente para formar um L');
    break;
  case 'peão':
    console.log('Anda uma casa para frente; No primeiro movimento pode andar duas casas para a frente; Captura peças apenas pela posição diagonal.')
    break;
  default:
    console.log('Acho que isso não é uma peça de xadrez...')
}
