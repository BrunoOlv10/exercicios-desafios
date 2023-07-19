// Criando e add elementos 

// CreateElement
const div = document.createElement('div');
div.innerText = "Olá Devs!"

// append prepend
// append - add depois do elemento selecionado (nesse caso o body)
// prepend - add antes do elemento
const body = document.querySelector('body')

body.prepend(div)