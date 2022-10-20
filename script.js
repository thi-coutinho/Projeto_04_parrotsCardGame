let text = "Entre com um número par de cartas de 4 a 14?";
let test = 8;
let numeroCartas = test? test:perguntaInicial();

const game = document.querySelector(".game");

let listaCartasImgFrente = [1,2,3,4,5,6,7];
// embaralhamos para cada jogo ter cartas diferentes

embaralhaLista(listaCartasImgFrente)
listaCartasImgFrente = listaCartasImgFrente.slice(7-numeroCartas/2)
listaCartasImgFrente=listaCartasImgFrente.concat(listaCartasImgFrente)
embaralhaLista(listaCartasImgFrente)

for (let i = 0; i < numeroCartas; i++) {
    let srcCartaFrente = `./arquivos/${listaCartasImgFrente[i]}.gif`
    game.innerHTML+=`<div class="carta">
                        <img class="verso" src="./arquivos/back.png" alt="" srcset="">
                        <img class="frente" src=${srcCartaFrente} alt="" srcset="">
                     </div>
                        `
}