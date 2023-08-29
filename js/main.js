const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const robotronImagem = document.querySelector("#robotron")

function cor(pintura) {
    switch (pintura) {
        case 'red':
            robotronImagem.src = "./cores/red.png"
            break;
        case 'yellow':
            robotronImagem.src = "./cores/yellow.png"
            break;
        case 'black':
            robotronImagem.src = "./cores/black.png"
            break;
        case 'white':
            robotronImagem.src = "./cores/white.png"
            break;
        case 'pink':
            robotronImagem.src = "./cores/pink.png"
            break;
        case 'blue':
            robotronImagem.src = "./cores/blue.png"
            break;
        default:
            console.log("default");
    }
}

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    console.log(peca)
    if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    } else if (peca.value > 0) {
        peca.value = parseInt(peca.value) - 1;
    }
    operacaoSinal = operacao
}


function atualizaEstatisticas(peca) {
    estatistica.forEach( (elemento) => {
        if (operacaoSinal === "-" && parseInt(elemento.textContent)>0) {
           elemento.textContent = Math.abs(parseInt(elemento.textContent)) - pecas[peca][elemento.dataset.estatistica]
        }
        else if (operacaoSinal === "+") {
            elemento.textContent = Math.abs(parseInt(elemento.textContent)) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}
