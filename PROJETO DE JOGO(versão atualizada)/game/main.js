var player = document.getElementById("player");
var x = 100; 
var y = 100; 
var mapa = [  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", " ", " ", " ", " ", "*", " ", " ", " ", "*", " ", " ", " ", "*", " ", " ", " ", " ", " ", "*"],
  ["*", "*", "*", "*", " ", "*", " ", "*", " ", "*", " ", "*", " ", "*", "*", "*", "*", "*", "*", "*"],
  ["*", " ", " ", " ", " ", "*", " ", "*", " ", "*", " ", "*", " ", " ", " ", " ", " ", " ", " ", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", " ", " ", " ", " ", "*", " ", "*", " ", "*", " ", "*", " ", " ", " ", " ", " ", " ", " ", "*"],
  ["*", "*", "*", "*", " ", "*", " ", "*", " ", "*", " ", "*", "*", "*", "*", "*", "*", "*", " ", "*"],
  ["*", " ", " ", " ", " ", "*", " ", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
];

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
  
  var obstaculos = [
	{x: 5, y: 1},
	{x: 9, y: 1},
	{x: 14, y: 1},
	{x: 1, y: 3},
	{x: 5, y: 3},
	{x: 9, y: 3},
	{x: 14, y: 3},
	{x: 5, y: 5},
	{x: 9, y: 5},
	{x: 1, y: 7},
	{x: 3, y: 7},
	{x: 5, y: 7},
	{x: 7, y: 7},
	{x: 9, y: 7},
	{x: 11, y: 7},
	{x: 13, y: 7},
	{x: 15, y: 7},
	{x: 17, y: 7},
	{x: 5, y: 9},
	{x: 9, y: 9}
  ]
