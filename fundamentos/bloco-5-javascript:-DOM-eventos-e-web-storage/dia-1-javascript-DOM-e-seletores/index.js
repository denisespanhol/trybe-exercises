document.getElementsByTagName('p')[1].innerText = 'Me vejo como extensão do que sou hoje.';

document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';

let upper = document.getElementsByTagName('p');

for (index = 0; index < upper.length; index += 1) {
    document.getElementsByTagName('p')[index].innerText = upper[index].innerText.toUpperCase();
}

for (index = 0; index < upper.length; index += 1) {
    console.log(upper[index].innerText)
}
