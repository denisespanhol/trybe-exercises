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
    
  createDaysOfTheWeek();
  createDaysInNumbers();
  
  // Escreva seu código abaixo.
  