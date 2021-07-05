// Faça um for/in que mostre todas as chaves do objeto.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

for (let index in info) {
  console.log(index);
}
