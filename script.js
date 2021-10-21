var tabuleiro = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
function jogar(id, p1, p2){
    let opcao = document.getElementById(id);
    let jogardor = document.getElementById("jogador1");
    if (jogardor.checked){
        let x = document.getElementById(id+'X');
        x.style.zIndex = "4";
        jogardor.checked = false;
        document.getElementById("jogador2").checked = true;
        opcao.style.pointerEvents = 'none';
        tabuleiro[p1][p2] = 1;
        checarVencedor();
        let label1 =  document.getElementById("jogador1Label")
        label1.style.visibility = 'hidden';
        let label2 =  document.getElementById("jogador2Label")
        label2.style.visibility = 'visible';
    } else {
        let o = document.getElementById(id+'O');
        o.style.zIndex = "4";
        document.getElementById("jogador1").checked = true;
        opcao.style.pointerEvents = 'none';
        tabuleiro[p1][p2] = 2;
        checarVencedor();
        let label1 =  document.getElementById("jogador1Label")
        label1.style.visibility = 'visible';
        let label2 =  document.getElementById("jogador2Label")
        label2.style.visibility = 'hidden';
    }
}
function checarVencedor(){
    if((tabuleiro[0][0] == 1 && tabuleiro[0][1] == 1 && tabuleiro[0][2] == 1) || (tabuleiro[1][0] == 1 && tabuleiro[1][1] == 1 && tabuleiro[1][2] == 1) || (tabuleiro[2][0] == 1 && tabuleiro[2][1] == 1 && tabuleiro[2][2] == 1) || (tabuleiro[0][0] == 1 && tabuleiro[1][0] == 1 && tabuleiro[2][0] == 1) ||(tabuleiro[0][1] == 1 && tabuleiro[1][1] == 1 && tabuleiro[2][1] == 1) || (tabuleiro[0][2] == 1 && tabuleiro[1][2] == 1 && tabuleiro[2][2] == 1) || (tabuleiro[0][0] == 1 && tabuleiro[1][1] == 1 && tabuleiro[2][2] == 1) || (tabuleiro[0][2] == 1 && tabuleiro[1][1] == 1 && tabuleiro[2][0] == 1)  ){
        console.log("Jogador 1 Venceu");
        document.getElementById("resultado").innerHTML = "Jogador 1 Venceu";
        let pointers = document.getElementById("grid-template")
        pointers.style.pointerEvents = 'none';
        let label2 =  document.getElementById("quemJoga")
        label2.style.display = 'none';

    } else if((tabuleiro[0][0] == 2 && tabuleiro[0][1] == 2 && tabuleiro[0][2] == 2) || (tabuleiro[1][0] == 2 && tabuleiro[1][1] == 2 && tabuleiro[1][2] == 2) || (tabuleiro[2][0] == 2 && tabuleiro[2][1] == 2 && tabuleiro[2][2] == 2) || (tabuleiro[0][0] == 2 && tabuleiro[1][0] == 2 && tabuleiro[2][0] == 2) ||(tabuleiro[0][1] == 2 && tabuleiro[1][1] == 2 && tabuleiro[2][1] == 2) || (tabuleiro[0][2] == 2 && tabuleiro[1][2] == 2 && tabuleiro[2][2] == 2) || (tabuleiro[0][0] == 2 && tabuleiro[1][1] == 2 && tabuleiro[2][2] == 2) || (tabuleiro[0][2] == 2 && tabuleiro[1][1] == 2 && tabuleiro[2][0] == 2)  ){
        console.log("Jogador 2 Venceu");
        document.getElementById("resultado").innerHTML = "Jogador 2 Venceu";
        let pointers = document.getElementById("grid-template")
        pointers.style.pointerEvents = 'none';
        let label1 =  document.getElementById("quemJoga");
        label1.style.display = 'none';
    } 
}
