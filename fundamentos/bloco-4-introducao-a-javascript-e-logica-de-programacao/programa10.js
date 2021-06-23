// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let chessPiece = 'peão';

switch (chessPiece) {
    case 'Rei':
        console.log('Anda uma casa em qualquer direção.');
        break;
    case 'Rainha' || 'Dama':
        console.log('Anda inúmeras casas em qualquer direção');
        break;
    case 'Torre':
        console.log('Anda inúmeras casas em linhas retas');
        break;
    case 'Bispo':
        console.log('Anda inúmeras casas em diagonais');
        break;
    case 'Cavalo':
        console.log('Anda uma quantidade de casas suficiente para formar um L');
        break;
    case 'Peão':
        console.log('Anda uma casa para frente; No primeiro movimento pode andar duas casas para a frente; Captura peças apenas pela posição diagonal.')
        break;
    default:
        console.log('Acho que isso não é uma peça de xadrez...')
}
