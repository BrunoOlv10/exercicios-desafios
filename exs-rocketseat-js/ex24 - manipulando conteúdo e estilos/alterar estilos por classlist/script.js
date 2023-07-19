// Alterando estilos
// classList - toggle coloca a classe se não tiver ou tira se já tiver

const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active')