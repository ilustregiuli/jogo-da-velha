let jogador = null;
let vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');
let quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){

    if(vencedor !== null){
        return;
    }

    let quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if(jogador === 'X'){
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor();

}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){

    let quad1 = document.getElementById(1);
    let quad2 = document.getElementById(2);
    let quad3 = document.getElementById(3);
    let quad4 = document.getElementById(4);
    let quad5 = document.getElementById(5);
    let quad6 = document.getElementById(6);
    let quad7 = document.getElementById(7);
    let quad8 = document.getElementById(8);
    let quad9 = document.getElementById(9);

    if(checaSequencia(quad1,quad2,quad3)){  // 1º linha
        mudarCorQuadrado(quad1,quad2,quad3);
        mudarVencedor(quad1);
        return;
    }

    if(checaSequencia(quad4,quad5,quad6)){  // 2º linha
        mudarCorQuadrado(quad4,quad5,quad6);
        mudarVencedor(quad4);
        return;
    }

    if(checaSequencia(quad7,quad8,quad9)){  // 3º linha
        mudarCorQuadrado(quad7,quad8,quad9);
        mudarVencedor(quad7);
        return;
    }

    if(checaSequencia(quad1,quad4,quad7)){  // 1º coluna
        mudarCorQuadrado(quad1,quad4,quad7);
        mudarVencedor(quad1);
        return;
    }

    if(checaSequencia(quad2,quad5,quad8)){  // 2º coluna
        mudarCorQuadrado(quad2,quad5,quad8);
        mudarVencedor(quad2);
        return;
    }

    if(checaSequencia(quad3,quad6,quad9)){  // 3º coluna
        mudarCorQuadrado(quad3,quad6,quad9);
        mudarVencedor(quad3);
        return;
    }

    if(checaSequencia(quad1,quad5,quad9)){  // diagonal E - D
        mudarCorQuadrado(quad1,quad5,quad9);
        mudarVencedor(quad1);
        return;
    }

    if(checaSequencia(quad3,quad5,quad7)){  // diagonal D - E
        mudarCorQuadrado(quad3,quad5,quad7);
        mudarVencedor(quad3);
        return;
    }


}

function mudarCorQuadrado(quad1,quad2,quad3){
    quad1.style.background = '#0f0';
    quad2.style.background = '#0f0';
    quad3.style.background = '#0f0';
    return;
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function checaSequencia(quad1,quad2,quad3){
    let ehIgual = false;
    if(quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML){
        ehIgual = true;
    }
    return ehIgual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i);
        quadrado.style.background = 'rgb(196, 200, 233)'; 
        quadrado.style.color = 'rgb(196, 200, 233)'; 
        quadrado.innerHTML = '-';       
    }

    mudarJogador('X');

}




