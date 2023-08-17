const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")

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

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas (evento.target.dataset.peca)
    })

    function manipulaDados(operacao, controle) {
        const peca = controle.querySelector("[data-contador]")
        console.log(peca)
        if(operacao === "+") {
            peca.value = parseInt(peca.value) + 1;
        } else if (peca.value > 0){
            peca.value = parseInt(peca.value) - 1;
        }
    }

   

    function atualizaEstatisticas(peca) {
        estatisticas.forEach( (elemento) => {
            if (elemento.textContent > 0 || manipulaDados.operacao === "-") {
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]}
            else {
                elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]}
            }
        )}

        /* problema atual:  estatísticas estão considerando o sinal de menos com menos está dando mais. Procurar forma de driblar a regra de sinais aqui.*/

})

/* function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
} */

