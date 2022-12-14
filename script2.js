// funções auxiliares

/**
 * embaralha lista
 * @param {list} lista
 */
function embaralhaLista(lista) {
    /*recebe uma lista e embaralha ela aleatoriamente inplace*/
    function comparador() { 
        return Math.random() - 0.5; 
    }
    lista.sort(comparador)
}

function perguntaInicial(texto){
    // pergunta ao user quantas cartas e só aceita resposta número par entre 4 e 14
    // retorna o número de cartas
    let resposta;
    while(true){
        
        resposta = Number(prompt(texto))
        if (resposta%2==0 && resposta >=4 && resposta <=14){
            break
        }
        else {
            texto = "Resposta inválida, tente outra vez (número par entre 4 e 14):"
        }
    }
    return resposta
}


function virarCarta(carta) {
    carta.classList.toggle("roda")
    const verso = carta.querySelector(".verso");
    const frente = carta.querySelector(".frente");
    function esconder(lado){
        lado.classList.toggle("escondido")
    }
    setTimeout( esconder,300,verso)
    setTimeout( esconder,300,frente)
}

function cartaCerta(carta){
    carta.onclick = ""
    const verso = carta.querySelector(".verso");
    const frente = carta.querySelector(".frente");
    verso.classList.toggle("acerto")
    frente.classList.toggle("acerto")
}

function addTimer(){
    const timer = document.querySelector(".timer");
    timer.innerHTML=seg
    seg++
    numeroCartas==0? clearInterval(codInterval):""
}