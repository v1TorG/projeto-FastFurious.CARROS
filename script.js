let esquerdoButton = document.getElementById('esquerdo')
let direitoButton = document.getElementById('direito')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicadores')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = itens.length - 1

direitoButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    if (active + 1 > lastPosition) {
        active = 0
    } else {
        active = active + 1
    }

    itens[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.ativo')
    dotsOld.classList.remove('ativo')
    dots[active].classList.add('ativo')

    indicator.querySelector('.num').innerHTML = '0' + (active + 1)
}

esquerdoButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    if (active - 1 < firstPosition) {
        active = lastPosition
    } else {
        active = active - 1
    }
    itens[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.ativo')
    dotsOld.classList.remove('ativo')
    dots[active].classList.add('ativo')

    indicator.querySelector('.num').innerHTML = '0' + (active + 1)
}