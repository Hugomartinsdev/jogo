var mapa = [["*","*","*","*","*",],
            ["*","0","0","0","*",],
            ["*","0","0","0","*",],
            ["*","0","0","0","*",],                    
            ["*","*","*","*","*"]]


document.getElementById("mapa").innerHTML = mapa



var jogador = "&"
//matriz [0][0]

//var chave = "@"


//var porta = "D"


window.addEventListener("keydown",function keydown(event){
var tecla = event.keyCode


if (tecla.key ==="W") {
   //matriz[0] [-1] //muda a posição do jogador
  //dps ele faz uma atualização no mapa
}
if (tecla.key ==="S") {
   // matriz[0] [+1] //muda a posição do jogador
   //dps ele faz uma atualização no mapa
 }
 if (tecla.key ==="D") {
   // matriz[+1][0] //muda a posição do jogador
   //dps ele faz uma atualização no mapa
 }
 if (tecla.key ==="A") {
   // matriz[-1][0] //muda a posição do jogador
   //dps ele faz uma atualização no mapa
 }
})
