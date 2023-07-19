// Eventos
// argumento event 
// currentTarget - identifica aonde o evento está sendo disparado e colocando ao lado .value é mostrado o que está sendo colocado dentro do input
const input = document.querySelector("input");

input.onkeydown = function (event) {
  console.log(event.currentTarget);
}
