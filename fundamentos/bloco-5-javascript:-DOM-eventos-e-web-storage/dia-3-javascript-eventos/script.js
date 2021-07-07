function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  // 1.1 Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  // 1.2 Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  // 1.3 Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  function createDaysInNumbers () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let SelectUlDays = document.querySelector('#days');

    for (index = 0; index < dezDaysList.length; index += 1) {
        let liDays = SelectUlDays.appendChild(document.createElement('li'));
        liDays.className = 'day';
        let liDaysList = document.querySelectorAll('.day');
        liDaysList[index].innerText = dezDaysList[index];
    }

    document.querySelectorAll('.day')[5].classList.add('friday');
    document.querySelectorAll('.day')[12].classList.add('friday');
    document.querySelectorAll('.day')[19].classList.add('friday');
    document.querySelectorAll('.day')[25].classList.add('holiday');
    document.querySelectorAll('.day')[26].classList.add('holiday', 'friday');
    document.querySelectorAll('.day')[32].classList.add('holiday');
}

createDaysInNumbers();

// 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// 2.1 Adicione a este botão a ID "btn-holiday" .
// 2.2 Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function buttonMakerHoliday (nameButton) {
    let buttonElement = document.createElement('button');
    buttonElement.innerText = nameButton;
    let button = document.body.children[3].appendChild(buttonElement);
    button.id = 'btn-holiday';
}

buttonMakerHoliday('Feriados');

// 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// 3.1 É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
let buttonHolidays = document.querySelector('#btn-holiday');
function changeBackgroundColor () {
    let holidays = document.querySelectorAll('.holiday');

    if (holidays[0].style.backgroundColor === 'lime') {
        for (index = 0; index < holidays.length; index += 1) {
            holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        } 
    }
    else {
        for (index = 0; index < holidays.length; index += 1) {
            holidays[index].style.backgroundColor = 'lime';
        }
    }
}

buttonHolidays.addEventListener('click', changeBackgroundColor);

// 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// 4.1 Adicione a este botão o ID "btn-friday".
// 4.2 Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function buttonMakerFriday (nameButton) {
    let buttonElement = document.createElement('button');
    buttonElement.innerText = nameButton;
    let button = document.body.children[3].appendChild(buttonElement);
    button.id = 'btn-friday';
}

buttonMakerFriday('Sexta-feira');

// 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// 5.1 É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
function changeTextOfFridays () {
    let fridays = document.querySelectorAll('.friday');

    for (index = 0; index < fridays.length; index += 1) {
        if (fridays[index].innerText === 'SEXTOOOOU!') {
            fridays[0].innerText = '4';
            fridays[1].innerText = '11';
            fridays[2].innerText = '18';
            fridays[3].innerText = '25';
            break;
        }
        else {
            fridays[index].innerText = 'SEXTOOOOU!'
        }
    }
}

let buttonFridays = document.querySelector('#btn-friday');
buttonFridays.addEventListener('click', changeTextOfFridays);

// 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.