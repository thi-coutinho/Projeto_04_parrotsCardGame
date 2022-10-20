function embaralhaLista(lista) {
    function comparador() { 
        return Math.random() - 0.5; 
    }
    lista.sort(comparador)
}

function perguntaInicial(){
    let resposta;
    while(true){
        
        resposta = Number(prompt(text))
        if (resposta%2==0 && resposta >=4 && resposta <=14){
            break
        }
        else {
            text = "Resposta inválida, tente outra vez (número par entre 4 e 14):"
        }
    }
    return resposta
}