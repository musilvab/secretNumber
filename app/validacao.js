function validaValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        if(chute === 'game over') {
            document.body.innerHTML = 
            `<h1 class="titulo__game-over">Game Over</h1>
             <h2 class="subtitulo__game-over">Ops parece que o jogo acabou</h2>
             <h3>O número secreto era ${numeroSecreto}</h3>
    
             <button id="jogar-novamente" class="btn__jogar">Jogar Novamente</button>`
        }
        else {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        }
    }

    if(numeroForaDoPermitido(numero)) {
        elementoChute.innerHTML +=
        `<div>O número dito tem que estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML =
        `<h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn__jogar">Jogar Novamente</button>`
    }

    if(numero > numeroSecreto) {
        elementoChute.innerHTML += 
        `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
    else {
        elementoChute.innerHTML += 
        `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
    
}

function numeroForaDoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', event => {
    if(event.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
