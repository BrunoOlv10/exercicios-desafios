// Eventos 
const input = document.querySelector('input');

// apertar seta pra baixo no input
// input.onkeydown = function() {
//     console.log('rodei')
// }

// apertar seta pra cima no input
// input.onkeyup = function() {
//     console.log('rodei')
// }

// independente do botão que apertar
input.onkeypress = function() {
    console.log('rodei')
}