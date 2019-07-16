

function embaralhar(lista){

    let valor_aleatorio;
    let indice_aleatorio;

    for(let i = lista.length - 1; i !== 0; i --){
        indice_aleatorio = Math.floor(Math.random() * i);

        valor_aleatorio = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor_aleatorio;
    }

    return lista;
}

function fechar(carta){
    carta.style.backgroundImage = "url('imagens/Costas-das-cartas.jpg')"
    carta.onClick = processarClique;
}


function abrir(carta){
    carta.style.backgroundImage = `url('imagens/${imagens[Number(carta.id)]}')`;
    carta.onClick = null;
}
