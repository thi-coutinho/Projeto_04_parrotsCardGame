//esse é o script principal. funções auxiliares estão no script2

const game = document.querySelector(".game");
let text = "Entre com um número par de cartas de 4 a 14?";
let testando;
let numeroCartas;
let cartaSelecionadaAntes;
let numJogadas;
let codInterval;
let seg;
let listaCartasImgFrente;
iniciaJogo();

function iniciaJogo() {
    game.innerHTML = "";
    numJogadas = 0;
    codInterval=undefined;
    cartaSelecionadaAntes = undefined;
    seg = 0;
    listaCartasImgFrente = [1, 2, 3, 4, 5, 6, 7]
    numeroCartas = testando ? testando : perguntaInicial(text);

    // embaralhamos para cada jogo ter cartas diferentes
    embaralhaLista(listaCartasImgFrente)

    // precisamos tiras algumas cartas de acordo com o que o usuário informou
    listaCartasImgFrente = listaCartasImgFrente.slice(7 - numeroCartas / 2)
    // duplicamos as lista de cartas concatenando ela com ela mesma para formar os pares
    listaCartasImgFrente = listaCartasImgFrente.concat(listaCartasImgFrente)
    //embaralha-se novamente para ter a aleatoriedade do jogo
    embaralhaLista(listaCartasImgFrente)

    // cada carta tem um atributo ordem que é único representando sua ordem no jogo, e 2 é sua imagem da frente
    // portanto cada carta do mesmo par tera ordem[2] igual mas ordem[1] diferente
    for (let i = 0; i < numeroCartas; i++) {
        let srcCartaFrente = `./arquivos/${listaCartasImgFrente[i]}.gif`
        game.innerHTML += `<div onclick="fazerJogada(this)" ordem="${i}" class="carta ${listaCartasImgFrente[i]}">
                            <img class="verso" src="./arquivos/back.png" alt="" srcset="">
                            <img class="frente escondido" src=${srcCartaFrente} alt="" srcset="">
                       </div>
                        `
    }
}

function fazerJogada(novaCarta) {
    // a primeira jogada aciona o timer
    
    codInterval = numJogadas === 0 ? setInterval(addTimer, 1000) : codInterval

    if (cartaSelecionadaAntes === novaCarta) {
        // caso em que clicou na mesma carta de antes, não faço nada
    } else if (cartaSelecionadaAntes === undefined) {
        numJogadas++
        // caso em que selecionou a primeira carta. importante que essa condição seja testada primeiro pois 
        // haveria erro se pegasse uma índice de variável undefined como ocorreria se os outros ifs viessem primeiro
        cartaSelecionadaAntes = novaCarta
        virarCarta(novaCarta)

    } else if (cartaSelecionadaAntes.classList[1] == novaCarta.classList[1]) {
        numJogadas++
        // caso em que acertou o par
        virarCarta(novaCarta)
        cartaCerta(cartaSelecionadaAntes)
        cartaCerta(novaCarta)
        numeroCartas -= 2
        if (numeroCartas == 0) {
            setTimeout(alert, 1500, `Você ganhou em ${numJogadas} jogadas \n tempo total: ${seg} segundos`);
            setTimeout(() => {
                prompt("Quer jogar de novo? (sim/não)").toLowerCase() == "sim" ? iniciaJogo() : alert("Até uma próxima")
            }, 2000)

        } else {
            cartaSelecionadaAntes = undefined
        }
    } else {
        numJogadas++
        // caso em que errou o par
        virarCarta(novaCarta)
        let carta1 = cartaSelecionadaAntes
        setTimeout(() => { virarCarta(carta1) }, 1000)
        setTimeout(() => { virarCarta(novaCarta) }, 1000)
        cartaSelecionadaAntes = undefined

    }
}