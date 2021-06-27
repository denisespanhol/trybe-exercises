// Agora, inverta o lado do triângulo.

let n = 5;
let espaco = '';

for (let index = 0; index < n; index += 1) {
  espaco += ' ';
}

for (let index = 0; index < n; index += 1) {
  espaco = espaco.substring(1);
  espaco += '*';
  console.log(espaco);
  
}
