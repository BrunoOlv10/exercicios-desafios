// Add elementos 
const div = document.createElement('div');
div.innerText = "Olá Devs!"

// insertBefore - primeiro coloca o elemento que quer add, depois o elemento de referência para o elemento ser add antes
// const body = document.querySelector('body')
// const script = body.querySelector('script')
// body.insertBefore(div, script)


// para add depois
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)