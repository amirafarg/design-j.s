const btnEnter = document.getElementById('toggel-enter');
const menue = document.getElementById('column-div');

btnEnter.addEventListener('click', toggleEnter);

function toggleEnter () {
    menue.classList.toggle('show');
}