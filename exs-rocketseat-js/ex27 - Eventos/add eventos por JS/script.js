// Eventos 
// addEventListener - primeiro add tipo de evento e depois chamar a função sem parenteses

const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', print)

function print() {
    console.log('print');
}