let text = "Entre com um número par de cartas de 4 a 14?";
let test = 4;
let numeroCartas = test ? test : perguntaInicial();
let cartaSelecionadaAntes;
const game = document.querySelector(".game");

let listaCartasImgFrente = [1, 2, 3, 4, 5, 6, 7];
// embaralhamos para cada jogo ter cartas diferentes

embaralhaLista(listaCartasImgFrente)
listaCartasImgFrente = listaCartasImgFrente.slice(7 - numeroCartas / 2)
listaCartasImgFrente = listaCartasImgFrente.concat(listaCartasImgFrente)
embaralhaLista(listaCartasImgFrente)

// cada carta tem um atributo ncarta que é único do tipo n12 , onde 1 é a sua ordem no jogo, e 2 é sua imagem da frente
// portanto cada carta do mesmo par tera ncarta[2] igual mas ncarta[1] diferente
for (let i = 0; i < numeroCartas; i++) {
    let srcCartaFrente = `./arquivos/${listaCartasImgFrente[i]}.gif`
    const idCarta = "n" + i + listaCartasImgFrente[i];
    game.innerHTML += `<div onclick="fazerJogada(this)" ncarta="${idCarta}" class="carta ${idCarta}">
                            <img class="verso" src="./arquivos/back.png" alt="" srcset="">
                            <img class="frente escondido" src=${srcCartaFrente} alt="" srcset="">
                       </div>
                        `
}

function fazerJogada(novaCarta){
    console.log(novaCarta);
    console.log(novaCarta.getAttribute("ncarta"));

    if (cartaSelecionadaAntes===novaCarta.getAttribute("ncarta")){
       // caso em que clicou na mesma carta de antes, não faço nada
       console.log("mesma carta")
    } else if(cartaSelecionadaAntes===undefined){
        // caso em que selecionou a primeira carta
        console.log("primeira")
        cartaSelecionadaAntes = novaCarta.getAttribute("ncarta")
        console.log(cartaSelecionadaAntes)
        virarCarta(novaCarta)

    } else if (cartaSelecionadaAntes[2]===novaCarta.getAttribute("ncarta")[2]){
        // caso em que acertou o par
        console.log(`acertou .${cartaSelecionadaAntes}`)
        const carta1 = document.querySelector(`.${cartaSelecionadaAntes}`)
        virarCarta(novaCarta)
        cartaCerta(carta1)
        cartaCerta(novaCarta)
        console.log(carta1)
        console.log(novaCarta)
        cartaSelecionadaAntes = undefined
    } else if (cartaSelecionadaAntes[2]!==novaCarta.getAttribute("ncarta")[2]) {
        // caso em que errou o par
        console.log("errou")
        virarCarta(novaCarta)
        console.log(`.${cartaSelecionadaAntes}`)
        const carta1 = document.querySelector(`.${cartaSelecionadaAntes}`)
        console.log(carta1)
        setTimeout(()=>{virarCarta(carta1)},1000)
        setTimeout(()=>{virarCarta(novaCarta)},1000)
        cartaSelecionadaAntes = undefined

    }
}

function virarCarta(carta) {
    carta.classList.toggle("roda")
    const verso = carta.querySelector(".verso");
    const frente = carta.querySelector(".frente");
    verso.classList.toggle("escondido")
    frente.classList.toggle("escondido")
}

function cartaCerta(carta){
    carta.onclick = ""
    const verso = carta.querySelector(".verso");
    const frente = carta.querySelector(".frente");
    verso.classList.toggle("acerto")
    frente.classList.toggle("acerto")
}