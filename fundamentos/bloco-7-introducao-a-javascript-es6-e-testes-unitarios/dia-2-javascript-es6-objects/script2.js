const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addMorningTurn = () => lesson2.turno = 'manhã';
addMorningTurn();

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const returnKeys = () => Object.keys(lesson3);

// 3. Crie uma função para mostrar o tamanho de um objeto.

const sizeObject = () => Object.keys(lesson3).length;

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const returnValues = () => Object.values(lesson3);

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const returnAllStudents = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const returnEnumerableValues = number => Object.values(lesson3)[number];

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyObject = (object, key, value) => {
  const arrayObj = Object.entries(object);
  let result;
  for (index = 0; index < arrayObj.length; index += 1) {
    if (arrayObj[index][0] === key && arrayObj[index][1] === value) {
      result = true;
    } else {
      result = false
    }
  }
  return result;
}

console.log(verifyObject(lesson3, 'turno', 'noite'));
