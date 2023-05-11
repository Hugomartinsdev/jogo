var map, player = { x: 1, y: 8 }, i, maze = document.getElementById('maze'), win;

function mapToHTML(map) {
    var html = '', x, y, dictionary = {
        '*': '<span class="tile wall">*</span>',
        '.': '<span class="tile floor">.</span>',
        '&': '<span class="tile player">&</span>',
        '=': '<span class="tile goal">=</span>',
        'D': '<span class="tile goal">D</span>',
        '@': '<span class="tile goal">@</span>',
    };
    for (y = 0; y < map.length; y += 1) {
        for (x = 0; x < map[y].length; x += 1) {
            html += dictionary[map[y][x]];
        }
        html += '<br>';
    }
    return html;
}

function updateMap() {
    var displayMap = [], x, y;
    for (y = 0; y < map.length; y += 1) {
        displayMap[y] = displayMap[y] || [];
        for (x = 0; x < map[y].length; x += 1) {
            displayMap[y][x] = map[y][x];
        }
    }
    displayMap[player.y][player.x] = '&';
    for (y = 0; y < displayMap.length; y += 1) {
        displayMap[y] = displayMap[y].join('');
    }
    maze.innerHTML = mapToHTML(displayMap);
}

function playerMove(x, y) {
    var toX = player.x + x, toY = player.y + y;
    if (map[toY][toX] === '.' || map[toY][toX] === '=') {
        player.x = toX;
        player.y = toY;
    }
    updateMap();
    if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou';
        document.getElementById('buttons').innerHTML = '';
    }
}

function playerMove(x, y) {
    var toX = player.x + x, toY = player.y + y;
    if (map[toY][toX] === '.' || map[toY][toX] === 'D') {
        player.x = toX;
        player.y = toY;
    }
    updateMap();
    if (map[toY][toX] === 'D') {
        maze.innerHTML = 'Porta Fechada volte e pegue a chave';
        document.getElementById('buttons').innerHTML = '';
    }
}

function playerMove(x, y) {
    var toX = player.x + x, toY = player.y + y;
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    }
    updateMap();
    if (map[toY][toX] === '@') {
        maze.innerHTML = 'Muito bem pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
        // Verifica se a posição atual do jogador é a mesma da porta "D"
        if (player.x === 2 && player.y === 13) {
            // Abre a porta "D"
            map[13][1] = '.';
            updateMap();
        }
    }
    if (map[toY][toX] === 'D') {
        maze.innerHTML = 'Porta Fechada volte e pegue a chave';
        document.getElementById('buttons').innerHTML = '';
    }
}
function playerMove(x, y) {
    var toX = player.x + x, toY = player.y + y;
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    }
    updateMap();
    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    }
    if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou';
        document.getElementById('buttons').innerHTML = '';
    }
}



map = [
    '*****************',
    '*..............@*',
    '*.***.***.***.***',
    '*.*.*.*...*...*.*',
    '*.***.*****.***.*',
    '*...............*',
    '*****.*****.*****',
    '*...*...*...*...*',
    '*.*****.*.*****.*',
    '*...............*',
    '*.*************.*',
    '*...............*',
    '*****.*****.*****',
    '**D.....*...*...*',
    '..**.***.***.***.',
    
];


for (i = 0; i < map.length; i += 1) {
    map[i] = map[i].split('');
}
document.getElementById('button-north').onclick = function () {
    playerMove(0, -1);
};
document.getElementById('button-south').onclick = function () {
    playerMove(0, 1);
};
document.getElementById('button-east').onclick = function () {
    playerMove(1, 0);
};
document.getElementById('button-west').onclick = function () {
    playerMove(-1, 0);
};
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 87) { // w
        playerMove(0, -1);
    } else if (event.keyCode === 83) { // s
        playerMove(0, 1);
    } else if (event.keyCode === 65) { // a
        playerMove(-1, 0);
    } else if (event.keyCode === 68) { // d
        playerMove(1, 0);
    }
});

updateMap();

setInterval(function() {
    maze.querySelector('.player').style.color = getRandomRainbowColor();
  }, 100);
  function getRandomRainbowColor() {
    var colors = [
      "#ff0000", // red
      "#ff7f00", // orange
      "#ffff00", // yellow
      "#00ff00", // green
      "#0000ff", // blue
      "#4b0082", // indigo
      "#9400d3"  // violet
    ];
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
    