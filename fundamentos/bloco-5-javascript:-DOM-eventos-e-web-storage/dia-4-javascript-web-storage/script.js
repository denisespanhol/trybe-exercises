if(localStorage.backgroundColor) {
 document.body.style.backgroundColor = localStorage.backgroundColor;
}

//console.log(document.getElementById('site-colors'));

let saveBackground = function() {
  let siteColors = document.getElementById('site-colors').value;
  localStorage.setItem('backgroundColor', siteColors);
  
}

document.onchange = saveBackground;

function changeColors() {
  let siteColors = document.getElementById('site-colors').value;

  if(localStorage.getItem('backgroundColor', siteColors) === 'purple') {
    document.body.style.backgroundColor = 'rgb(189, 178, 255)';
    document.body.style.color = 'black';
  }
  if(localStorage.getItem('backgroundColor', siteColors) === 'black') {
    document.body.style.backgroundColor = 'black';
  }
  if(localStorage.getItem('backgroundColor', siteColors) === 'blue') {
    document.body.style.backgroundColor = 'rgb(155, 246, 255)';
  }
  if(localStorage.getItem('backgroundColor', siteColors) === 'white') {
    document.body.style.backgroundColor = 'whitesmoke';
  }
}

document.addEventListener('change', changeColors);
