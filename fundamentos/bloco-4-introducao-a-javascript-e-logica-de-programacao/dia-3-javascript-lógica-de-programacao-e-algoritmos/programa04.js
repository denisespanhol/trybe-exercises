// Depois, faça uma pirâmide com n asteriscos de base

let n = 5;
let espaco = '';

for (let index = 0; index < n; index += 1) {
  espaco += ' ';
}

for (let index = 0; index < n - 2; index += 1) {
  if (espaco === '     ') {
    espaco = espaco.substring(3);
    espaco += '*';
  } else {
    espaco = espaco.substring(1);
    espaco += '**';
  }
  console.log(espaco);
}
