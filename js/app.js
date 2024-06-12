// header
const btnEnter = document.getElementById('toggel-enter');
const menue = document.getElementById('nav-list');
const btnExit = document.getElementById('toggel-exit');

btnEnter.addEventListener('click', toggleEnter);

function toggleEnter () {
    menue.classList.add('show');
    
}


// pragraph-sec-2
const enterMinus = getElementById("minus");
const paraDis = getElementById("p-t");

enterMinus.addEventListener('click', disAppere);

function disAppere () {
    paraDis.classList.toggle('show');
}