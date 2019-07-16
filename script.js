
function embaralhar(lista){
    let valor_temporario;
    let indice_aleatorio; 

    for(let i = lista.length -1; i !== 0; i--){
        indice_aleatorio = Math.floor(Math.random() * i );

        valor_temporario = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio]= valor_temporario;
    }
    return lista;
}

let cartas = document.querySelectorAll(".carta");

let imagensSalvas = ["Barney_Stinson.jpg", "barney.jpg", "Lily_Aldrin.jpg", "Marshall_Eriksen.jpg", 
"Robin_Scherbatsky.jpg", "Robin-2.jpg", "Ted_Mosby.jpg", "Ted-HQ-how-i-met.jpg"];

let imagens = imagensSalvas.concat(imagensSalvas);

let cartaVirada = null;

imagens = embaralhar(imagens);

for(let i = 0; i<cartas.length; i++){
    cartas[i].style.backgroundImage = `url("../imagens/${imagens[i]}")`;
}


setTimeout(function(){
    for(let carta of cartas){
        carta.style.backgroundImage = 'url("imagens/Costas-das-cartas.jpg")';
        carta.onClick = function(){

            if(cartaVirada && cartaVirada.id !== carta.id){
                setTimeout(function(){
                    if(cartaVirada.style.backgroundImage === carta.style.backgroundImage){
                        cartaVirada = null;
                        cartaVirada.onClick = null;
                        carta.onClick = null;
                    }else{
                        carta.style.backgroundImage = 'url("imagens/Costas-das-cartas.jpg")';
                        cartaVirada.style.backgroundImage = 'url("imagens/Costas-das-cartas.jpg")';
                    }
                    cartaVirada = null;
                }, 1500)
                
            }else{ 
            carta.style.backgroundImage = `url("imagens/${imagens[Number(carta.id)]}")`;
            cartaVirada = carta;
            }
        }
    }

}, 3000);