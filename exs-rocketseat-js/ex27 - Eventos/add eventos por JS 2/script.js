// Eventos 
// colocar o evento no elemento que vai receber o evento

const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print() {
    console.log('print');
}

h1.addEventListener('click', function() {
    console.log('outro momento');
})