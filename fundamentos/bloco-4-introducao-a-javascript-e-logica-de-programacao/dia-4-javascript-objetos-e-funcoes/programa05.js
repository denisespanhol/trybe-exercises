// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);

if (info.recorrente && info2.recorrente === 'Sim') {
  console.log('Ambos recorrentes');
}
else if (info.recorrente === 'Sim' && info2.recorrente === 'Não') {
  console.log(info.personagem + ' é recorrente. ' + info2.personagem + ' não é recorrente.');
}
else if (info.recorrente === 'Não' && info2.recorrente === 'Sim') {
  console.log(info.personagem + ' não é recorrente. ' + info2.personagem + ' é recorrente.');
}
else {
  console.log('Nenhum recorrente.');
}
