// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
//  Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.

const testingScope = escopo => {
	if (escopo === true) {
		let ifScope = 'Não devo ser utilizada fora do meu escopo (if).';
		ifScope = `${ifScope} Ótimo, fui utilizada no escopo !`;
		console.log(ifScope);
	} else {
		const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
		console.log(elseScope);
	}
}

testingScope(true);

// 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens[5]}, ${oddsAndEvens[1]}, ${oddsAndEvens[2]}, ${oddsAndEvens[4]}, ${oddsAndEvens[3]}, ${oddsAndEvens[0]} se encontram ordenados de forma crescente!`);

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const ordenedNumbers = `Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`;

console.log(ordenedNumbers);

// 3. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const testNumber = n => {
	for (let index = n - 1; index >= 1; index -= 1) {
		n *= index;
	}
	return n;
}

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.

const testNumber2 = n => (
	n !== 1 ? n * testNumber2(n - 1) : n
);
