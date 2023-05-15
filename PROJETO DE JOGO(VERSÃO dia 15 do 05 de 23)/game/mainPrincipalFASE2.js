var map, player = { x: 1, y: 8 }, i, maze = document.getElementById('maze'), win;

function mapToHTML(map) {
    var html = '', x, y, dictionary = {
        '*': '<span class="tile wall">*</span>',
        '.': '<span class="tile floor">.</span>',
        '&': '<span class="tile player">&</span>',
        '&': '<span class="tile player">&</span>',
        '=': '<span class="tile goal">=</span>',
        'D': '<span class="tile goal">D</span>',
        '@': '<span class="tile goal">@</span>',
        '#': '<span class="tile goal">#</span>'
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
    '*#........#.....*',
    '*****.*****.*****',
    '*...*...*...*...*',
    '*.*****.*.*****.*',
    '*............#..*',
    '*.*************.*',
    '*...............*',
    '*****.*****.*****',
    '**D....#*...*...*',
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
    }else if (event.keyCode === 83) { // s
        playerMove(0, 1);
    } else if (event.keyCode === 65) { // a
        playerMove(-1, 0);
    } else if (event.keyCode === 68) { // d
        playerMove(1, 0);
    }
});
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // Up arrow
        player2Move(0, -1);
    }else if (event.keyCode === 40) { // Down arrow
        player2Move(0, 1);
    } else if (event.keyCode === 37) { // Left arrow
        player2Move(-1, 0);
    } else if (event.keyCode === 39) { // Right arrow
        player2Move(1, 0);
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


  var maxHealth = 9;
  var currentHealth = 9;
  var hitCount = 0;
  var playerLives = 3;
  
  function takeDamage(amount) {
      currentHealth -= amount;
      if (currentHealth <= 0) {
        // jogador morreu
      }
  }
  
  function heal(amount) {
      currentHealth += amount;
      if (currentHealth > maxHealth) {
          currentHealth = maxHealth;
      }
  }
  
  function updateHealthBar() {
      var fillWidth = (currentHealth / maxHealth) * 3;
      document.getElementById('health-bar-fill').style.width = fillWidth + '%';
  }
  
  function playerMove(x, y) {
      var toX = player.x + x, toY = player.y + y;
      if (map[toY][toX] === '.' || map[toY][toX] === '@') {
          player.x = toX;
          player.y = toY;
      } else if (map[toY][toX] === '#') {
          hitCount++;
          if (hitCount === 1) {
              playerLives--;
              hitCount = 0;
              if (playerLives <= 0) {
                azideia.innerHTML = alert('Você perdeu todas as vidas!');
                  window.open('https://www.youtube.com/watch?v=-ZGlaAxB7nI')
                  return;
              } else {
                azideia.innerHTML = alert('Você perdeu uma vida!');
              }
          }
          player.x = 1;
          player.y = 8;
      } else if (map[toY][toX] === '@') {
          map[toY][toX] = '.';
          map[13][2] = '=';
          maze.innerHTML = 'Muito bem pegou a chave, CHAVOSO!';
          document.getElementById('buttons').innerHTML = '';
      } else if (map[toY][toX] === '=') {
          maze.innerHTML = 'Você ganhou';
          document.getElementById('buttons').innerHTML = '';
      }
      updateMap();
  }
  
//PLAYER DOIS 
var player2 = { x: 14, y: 1 };
displayMap[player1.y][player1.x] = '&';
displayMap[player1.y][player1.x] = '2';

document.getElementById('button-north2').onclick = function () {
    player2Move(0, -1);
  };
  document.getElementById('button-south2').onclick = function () {
    player2Move(0, 1);
  };
  document.getElementById('button-east2').onclick = function () {
    player2Move(1, 0);
  };
  document.getElementById('button-west2').onclick = function () {
    player2Move(-1, 0);
  };
  function player1Move(x, y) {
    var toX = player1.x + x, toY = player1.y + y;
    if (map[toY][toX] === '.' || map[toY][toX] === '=') {
      player1.x = toX;
      player1.y = toY;
    }
    updateMap();
    if (map[toY][toX] === '=') {
      maze.innerHTML = 'Jogador 1 venceu!';
      document.getElementById('buttons').innerHTML = '';
    }
  }
  
  function player2Move(x, y) {
    var toX = player2.x + x, toY = player2.y + y;
    if (map[toY][toX] === '.' || map[toY][toX] === '=') {
      player2.x = toX;
      player2.y = toY;
    }
    updateMap();
    if (map[toY][toX] === '=') {
      maze.innerHTML = 'Jogador 2 venceu!';
      document.getElementById('buttons').innerHTML = '';
    }
  }
  