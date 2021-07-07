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
    }

    for (index = 0; index < dezDaysList.length; index += 1) {
        document.querySelectorAll('.day')[index].innerText = dezDaysList[index];
    }
    
}
console.log(document.querySelectorAll('#days .day'));
  createDaysOfTheWeek();
  createDaysInNumbers();
  
  // Escreva seu código abaixo.
  