var player = document.getElementById("player");
var maze = document.getElementById("maze");
var x = 100;
var y = 100;

function movePlayer(event) {

}




function movePlayer(event) {
	
	switch(event.keyCode) {
		case 87: // W
			y -= 10;
			break;
		case 65: // A
			x -= 10;
			break;
		case 83: // S
			y += 10;
			break;
		case 68: // D
			x += 10;
			break;
	}


	if (x < 0) {
		x = 0;
	}
	if (y < 0) {
		y = 0;
	}
	if (x > window.innerWidth - player.offsetWidth) {
		x = window.innerWidth - player.offsetWidth;
	}
	if (y > window.innerHeight - player.offsetHeight) {
		y = window.innerHeight - player.offsetHeight;
	}
	

	player.style.top = y + "px";
	player.style.left = x + "px";
}


window.addEventListener("keydown", movePlayer);


setInterval(function() {
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += Math.floor(Math.random() * 16).toString(16);
	}
	player.style.color = color;
}, 500);

var jogador = {
	x: 1,
	y: 1
  };
  
 var objetivo = {
	x: 18,
	y: 7
  };
  


  