var map, player = { x: 1, y: 8 }, i, maze = document.getElementById('maze'), win;
var player = { x: 1, y: 8, rockets: 3 };
var map, player = { x: 1, y: 8 }, i, maze = document.getElementById('maze'), win;
var player = { x: 1, y: 8, lives: 3 };

function mapToHTML(map) {
    // Código existente para converter o mapa em HTML
    // ...

    return html;
}
function breakTile(tile) {
    if (tile.classList.contains('bomba')) {
        growPlayer();
    }
    // Adicione aqui o restante do código para tratar a quebra do tile (se necessário)
}

function updateMap() {
    // Código existente para atualizar o mapa
    // ...
}
// Restante do código existente...

document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
      createInteractableBlock();
    }
  });
  
  function createInteractableBlock() {
    var toX = player.x,
        toY = player.y;
    
    // Verifica se a posição à frente do jogador está vazia
    if (map[toY][toX + 1] === '.') {
      // Adiciona um bloco interagível na posição à frente do jogador
      map[toY] = replaceCharAtIndex(map[toY], toX + 1, 'I');
      updateMap();
    }
  }
  
  // Restante do código existente...
  
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deduzir uma vida do jogador
        resetPlayerPosition(); // Redefinir a posição do jogador
        updateHealthBar(); // Atualizar a barra de vida
        alert("Você tomou dano")
    }
    
    updateMap();
    
    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }
}


var map, player = { x: 1, y: 8 }, i, maze = document.getElementById('maze'), win;
var player = { x: 1, y: 8, rockets: 3 };
var map, player = { x: 1, y: 8 }, i, maze = document.getElementById('maze'), win;
var player = { x: 1, y: 8, lives: 3 };

function mapToHTML(map) {
    // Código existente para converter o mapa em HTML
    // ...

    return html;
}

function updateMap() {
    // Código existente para atualizar o mapa
    // ...
}

function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deduzir uma vida do jogador
        resetPlayerPosition(); // Redefinir a posição do jogador
        updateHealthBar(); // Atualizar a barra de vida
        alert("Você tomou dano")
    }
    
    updateMap();
    
    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }
}


function resetPlayerPosition() {
    player.x = 1;
    player.y = 8;
}

// Restante do código existente
// ...

function mapToHTML(map) {
    var dictionary = {
        '*': '<span class="tile wall">*</span>',
        '.': '<span class="tile floor">.</span>',
        '&': '<span class="tile player">&</span>',
        '=': '<span class="tile goal">=</span>',
        'D': '<span class="tile goal">D</span>',
        '@': '<span class="tile goal">@</span>',
        '#': '<span class="tile spike" onclick="breakTile(this)">#</span>',
        '>': '<span class="">></span>',
        'o': '<button class="tile bomba" id="lightButton" onclick="toggleLight()">o</button>',
        '0': '<span class="">0</span>',
    };
    var html = ''; // Initialize the 'html' variable
    for (var y = 0; y < map.length; y += 1) {
        for (var x = 0; x < map[y].length; x += 1) {
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

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }

    updateMap();

    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
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
function playerMove(x, y) {
    var toX = player.x + x, toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    }
    function toggleLight() {
        // Modifica o estilo da página para criar o efeito de branqueamento
        maze.style.backgroundColor = 'white';
        setTimeout(function() {
            // Retorna ao estilo original após 200 milissegundos
            maze.style.backgroundColor = 'black';
        }, 200);
    }
    
    updateMap();
    
    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }
}

function findNextPortal(x, y) {
    var portalX = -1, portalY = -1;
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] === '>' && (i !== y || j !== x)) {
                portalX = j;
                portalY = i;
                break;
            }
        }
        if (portalX !== -1 && portalY !== -1) {
            break;
        }
    }
    return { x: portalX, y: portalY };
}



map = 
["******************************",
"*******************************",
"**###.....@##..............>***",
"**####....º.................***",
"**........############......***",
"**......................****.**",
"***************************.***",
"***************************.***",
"**.......º....##............***",
"**..................**......***",
"**.......o....****..**......***",
"**............****..**...##.***",
"*............>**....**...##.***",
"*.D*************....**......***",
"****************....**......***",
"**..................**......***",
"**..................**......**",
"**..................**......**",
"**..................**......**",
"**..................**......**",
"**..................**......**",
"**..................**......**",
"**..............******......**",
"**..............******......**",
"**#############.**..........**",
"**.............***..........**",
"**.............***..........**",
"******************..........**",
"******************************",
"******************************"];


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
    } else if (event.keyCode === 73) { // i
        launchRocket();
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


  var maxHealth = 100;
var currentHealth = 100;

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
  if (player.collidesWith(enemy)) {
    takeDamage(10);
  }
  if (player.collidesWith(healthItem)) {
    heal(20);
  }
  function updateHealthBar() {
    var fillWidth = (currentHealth / maxHealth) * 100;
    document.getElementById('health-bar-fill').style.width = fillWidth + '%';
  }
  
  var player = { x: 1, y: 8, rockets: 3 };

  var boss = { x: 10, y: 10, health: 50 };
  function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }
    
    updateMap();
    
    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }
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
    handleCollision(player.x, player.y);
}

function handleCollision(x, y) {
    if (map[y][x] === '#') {
        takeDamage(10); // Causar dano ao jogador
        resetPlayerPosition(); // Redefinir posição do jogador
        updateHealthBar(); // Atualizar a barra de vida
        alert("Você tomou dano")
    }
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }
    
    updateMap();
    handleCollision(player.x, player.y);
}
function updateMap() {
    var displayMap = [],
        x, y;

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
    handleCollision(player.x, player.y);
}

function handleCollision(x, y) {
    if (map[y][x] === '#') {
        takeDamage(10); // Causar dano ao jogador
        resetPlayerPosition(); // Redefinir posição do jogador
        updateHealthBar(); // Atualizar a barra de vida
        alert("Você tomou dano")
    }
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Causar dano ao jogador
        resetPlayerPosition(); // Redefinir posição do jogador
        updateHealthBar(); // Atualizar a barra de vida
        alert("Você tomou dano")
    }

    updateMap();
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }

    updateMap();

    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }
    
    updateMap();
    handleCollision(player.x, player.y);
}
// ...

var maxHealth = 100;
var currentHealth = 100;
var lives = 3;

function takeDamage(amount) {
    currentHealth -= amount;
    if (currentHealth <= 0) {
        lives -= 1;
        if (lives <= 0) {
            gameOver();
        } else {
            currentHealth = maxHealth;
            resetPlayerPosition();
        }
    }
    updateHealthBar();
}

function gameOver() {
    // Perform actions when the player loses the game
    maze.innerHTML = 'Você perdeu!';
    document.getElementById('buttons').innerHTML = '';
}

// ...
// ...

function handleCollision(x, y) {
    if (map[y][x] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }
}

// ...
// ...

function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        handleCollision(toX, toY);
        alert("Você tomou dano")
    }
    
    updateMap();
}

// ...

function handleCollision(x, y) {
    takeDamage(10); // Deal damage to the player
    resetPlayerPosition(); // Reset player position
    updateHealthBar(); // Update the health bar
}

// ...
// ...

function handleCollision(x, y) {
    if (map[y][x] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        resetPlayer(); // Reset player lives and health
        alert("Você tomou dano")
    }
}

// ...

function resetPlayer() {
    currentHealth = maxHealth;
    lives = 3;
}

// ...
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '#') {
        player.lives--; // Deduzir uma vida do jogador
        resetPlayerPosition(); // Redefinir a posição do jogador
        alert("Você tomou dano")
    }

    updateMap();

    checkGameOver(); // Verificar se o jogo acabou
}
function checkGameOver() {
    if (player.lives <= 0) {
        // Exibir "Game Over" e interromper o jogo
        document.getElementById('maze').innerHTML = 'Game Over';
        // Você também pode adicionar outras ações que desejar quando o jogo acabar
    }
}

function explodeMap() {
    // Remover o mapa e exibir uma mensagem de explosão
    maze.innerHTML = 'BOOM! O mapa explodiu!';
    document.getElementById('buttons').innerHTML = '';
    map = []; // Limpar o mapa
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    }

    updateMap();

    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }

    if (map[toY][toX] === 'o') {
        explodePlayerAndMap();
    }
}
function explodePlayerAndMap() {
    map[player.y][player.x] = '*'; // Define a posição do jogador como uma parede explodida
    maze.innerHTML = mapToHTML(map); // Atualiza o conteúdo do elemento "maze" com o novo mapa

    // Define um intervalo de tempo para restaurar o mapa e a posição do jogador após a explosão
    setTimeout(function() {
        map[player.y][player.x] = '*'; // Define a posição do jogador como uma parede explodida
        for (var y = 0; y < map.length; y++) {
            for (var x = 0; x < map[y].length; x++) {
                if (map[y][x] === '.') {
                    map[y][x] = '*'; // Define as posições vazias como paredes explodidas
                }
            }
        }
        resetPlayerPosition(); // Redefine a posição do jogador
        updateMap(); // Atualiza o mapa
    }, 1000); // 1000 milissegundos (1 segundo) de intervalo antes da restauração
}
var maxHealth = 9;
var currentHealth = 9;

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
    var fillWidth = (currentHealth / maxHealth) * 100;
    document.getElementById('health-bar-fill').style.width = fillWidth + '%';
}

// Chamada de exemplo:
takeDamage(3); // Deduz 10 pontos de vida
heal(20); // Recupera 20 pontos de vida
updateHealthBar(); // Atualiza a barra de vida no HTML


// Restante do código existente
// ...

function mapToHTML(map) {
    var dictionary = {
        '*': '<span class="tile wall">*</span>',
        '.': '<span class="tile floor">.</span>',
        '&': '<span class="tile player">&</span>',
        '=': '<span class="tile goal">=</span>',
        'D': '<span class="tile goal">D</span>',
        '@': '<span class="tile goal">@</span>',
        '#': '<span class="tile spike" onclick="breakTile(this)">#</span>',
        '>': '<span class="">></span>',
        'o': '<span class="bomba">o</span>',
        'º': '<span class="">º</span>',

    };
    var html = ''; // Initialize the 'html' variable
    for (var y = 0; y < map.length; y += 1) {
        for (var x = 0; x < map[y].length; x += 1) {
            html += dictionary[map[y][x]];
        }
        html += '<br>';
    }
    return html;
}
function activateButton() {
    // Ações a serem realizadas quando o botão for ativado
    console.log("O botão foi ativado!");
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

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
    }

    updateMap();

    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
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
function playerMove(x, y) {
    var toX = player.x + x, toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    }
    
    updateMap();
    
    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }
}

function findNextPortal(x, y) {
    var portalX = -1, portalY = -1;
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] === '>' && (i !== y || j !== x)) {
                portalX = j;
                portalY = i;
                break;
            }
        }
        if (portalX !== -1 && portalY !== -1) {
            break;
        }
    }
    return { x: portalX, y: portalY };
}


function explodeMap() {
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {
            if (map[y][x] !== '#') {
                map[y][x] = '.';
            }
        }
    }
    updateMap();
}

map = 
["******************************",
"*******************************",
"**###.....@##...º..........>***",
"**####..o.......o...........***",
"**........############......***",
"**......................****.**",
"***************************.***",
"**************************.***",
"**.o..........##.....o......***",
"**..................**......***",
"**.......o....****..**......***",
"**....º.......****..**...##.***",
"*............>**....**...##.***",
"*.D*************....**......***",
"****************....**......***",
"**..................**......***",
"**..................**......**",
"**..................**......**",
"**..................**......**",
"**..................**......**",
"**..................**......**",
"**..................**......**",
"**..............******......**",
"**..............******......**",
"**#############.**..........**",
"**.............***..........**",
"**.............***..........**",
"******************..........**",
"******************************",
"******************************"];

function detonateBomb() {
    if (map[player.y][player.x] === 'B') {
        // Remover a bomba do mapa
        map[player.y][player.x] = '.';

        // Percorrer todas as posições do mapa e remover os asteriscos
        for (var y = 0; y < map.length; y++) {
            for (var x = 0; x < map[y].length; x++) {
                if (map[y][x] !== '#') {
                    map[y][x] = '.';
                }
            }
        }

        updateMap();
    }
}

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
    } else if (event.keyCode === 73) { // i
        launchRocket();
    }
});

function activateButton() {
    // Alterar as paredes no labirinto
    map[5][10] = '.'; // Exemplo: Altera a parede para um caminho aberto
    map[6][10] = '.';
    
    // Atualiza o mapa após as alterações
    updateMap();
  }
  
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


  var maxHealth = 100;
var currentHealth = 100;

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
  if (player.collidesWith(enemy)) {
    takeDamage(10);
  }
  if (player.collidesWith(healthItem)) {
    heal(20);
  }
  function updateHealthBar() {
    var fillWidth = (currentHealth / maxHealth) * 100;
    document.getElementById('health-bar-fill').style.width = fillWidth + '%';
  }
  
  var player = { x: 1, y: 8, rockets: 3 };

  var boss = { x: 10, y: 10, health: 50 };
  function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }
    
    updateMap();
    
    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }
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
    handleCollision(player.x, player.y);
}

function handleCollision(x, y) {
    if (map[y][x] === '#') {
        takeDamage(10); // Causar dano ao jogador
        resetPlayerPosition(); // Redefinir posição do jogador
        updateHealthBar(); // Atualizar a barra de vida
        alert("Você tomou dano")
    }
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }
    
    updateMap();
    handleCollision(player.x, player.y);
}
function updateMap() {
    var displayMap = [],
        x, y;

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
    handleCollision(player.x, player.y);
}
function toggleLight() {
    // Obtenha a referência ao elemento <html>
    var htmlElement = document.getElementsByTagName('html')[0];
    
    // Inverta as cores da página
    htmlElement.style.backgroundColor = htmlElement.style.backgroundColor === 'black' ? 'white' : 'black';
    htmlElement.style.color = htmlElement.style.color === 'white' ? 'black' : 'white';
  }
  

function handleCollision(x, y) {
    if (map[y][x] === '#') {
        takeDamage(10); // Causar dano ao jogador
        resetPlayerPosition(); // Redefinir posição do jogador
        updateHealthBar(); // Atualizar a barra de vida
        alert("Você tomou dano")
    }
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Causar dano ao jogador
        resetPlayerPosition(); // Redefinir posição do jogador
        updateHealthBar(); // Atualizar a barra de vida
        alert("Você tomou dano")
    }

    updateMap();
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }

    updateMap();

    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }
    
    updateMap();
    handleCollision(player.x, player.y);
}
// ...

var maxHealth = 100;
var currentHealth = 100;
var lives = 3;

function takeDamage(amount) {
    currentHealth -= amount;
    if (currentHealth <= 0) {
        lives -= 1;
        if (lives <= 0) {
            gameOver();
        } else {
            currentHealth = maxHealth;
            resetPlayerPosition();
        }
    }
    updateHealthBar();
}

function gameOver() {
    // Perform actions when the player loses the game
    maze.innerHTML = 'Você perdeu!';
    document.getElementById('buttons').innerHTML = '';
}

// ...
// ...

function handleCollision(x, y) {
    if (map[y][x] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        alert("Você tomou dano")
    }
}

// ...
// ...

function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    } else if (map[toY][toX] === '#') {
        handleCollision(toX, toY);
        alert("Você tomou dano")
    }
    
    updateMap();
}

// ...

function handleCollision(x, y) {
    takeDamage(10); // Deal damage to the player
    resetPlayerPosition(); // Reset player position
    updateHealthBar(); // Update the health bar
}

// ...
// ...

function handleCollision(x, y) {
    if (map[y][x] === '#') {
        takeDamage(10); // Deal damage to the player
        resetPlayerPosition(); // Reset player position
        updateHealthBar(); // Update the health bar
        resetPlayer(); // Reset player lives and health
        alert("Você tomou dano")
    }
}
var map, player = { x: 1, y: 8, lives: 3 }, i, maze = document.getElementById('maze'), win;
var damageCount = 0; // Variável de contador para o dano

function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;
    
    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '#') {
        takeDamage(10); // Deduzir uma vida do jogador
        damageCount++; // Incrementar o contador de dano

        if (damageCount === 3) {
            gameOver(); // O jogador perdeu o jogo
        } else {
            resetPlayerPosition(); // Redefinir a posição do jogador
            updateHealthBar(); // Atualizar a barra de vida
            alert("Você tomou dano.");
        }
    }
    
    updateMap();
}

function takeDamage(amount) {
    // Código existente para deduzir uma quantidade de vida do jogador
    // ...
}

function resetPlayerPosition() {
    // Código existente para redefinir a posição do jogador
    // ...
}

function updateHealthBar() {
    // Código existente para atualizar a barra de vida do jogador
    // ...
}

function gameOver() {
    // Código existente para tratar o fim do jogo (quando o jogador perde todas as vidas)
    alert("Game Over! Você tocou nos espinhos três vezes.");
    // ...
}

// ...

function resetPlayer() {
    currentHealth = maxHealth;
    lives = 3;
}

// ...
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '#') {
        player.lives--; // Deduzir uma vida do jogador
        resetPlayerPosition(); // Redefinir a posição do jogador
        alert("Você tomou dano")
    }

    updateMap();

    checkGameOver(); // Verificar se o jogo acabou
}
function checkGameOver() {
    if (player.lives <= 0) {
        // Exibir "Game Over" e interromper o jogo
        document.getElementById('maze').innerHTML = 'Game Over';
        // Você também pode adicionar outras ações que desejar quando o jogo acabar
    }
}

function explodeMap() {
    // Remover o mapa e exibir uma mensagem de explosão
    maze.innerHTML = 'BOOM! O mapa explodiu!';
    document.getElementById('buttons').innerHTML = '';
    map = []; // Limpar o mapa
}
function playerMove(x, y) {
    var toX = player.x + x,
        toY = player.y + y;

    if (map[toY][toX] === '.' || map[toY][toX] === '@') {
        player.x = toX;
        player.y = toY;
    } else if (map[toY][toX] === '>') {
        var portal = findNextPortal(toX, toY);
        if (portal) {
            player.x = portal.x;
            player.y = portal.y;
        }
    }

    updateMap();

    if (map[toY][toX] === '@') {
        map[toY][toX] = '.';
        map[13][2] = '=';
        maze.innerHTML = 'Muito bem, você pegou a chave, CHAVOSO!';
        document.getElementById('buttons').innerHTML = '';
    } else if (map[toY][toX] === '=') {
        maze.innerHTML = 'Você ganhou!';
        document.getElementById('buttons').innerHTML = '';
    }

    if (map[toY][toX] === 'o') {
        explodePlayerAndMap();
    }
}
function explodePlayerAndMap() {
    map[player.y][player.x] = '*'; // Define a posição do jogador como uma parede explodida
    maze.innerHTML = mapToHTML(map); // Atualiza o conteúdo do elemento "maze" com o novo mapa
    function toggleLight() {
        // Obtenha a referência ao elemento <html>
        var htmlElement = document.getElementsByTagName('html')[0];
        
        // Inverta as cores da página
        htmlElement.style.backgroundColor = htmlElement.style.backgroundColor === 'black' ? 'white' : 'black';
        htmlElement.style.color = htmlElement.style.color === 'white' ? 'black' : 'white';
      }
      
    // Define um intervalo de tempo para restaurar o mapa e a posição do jogador após a explosão
    setTimeout(function() {
        map[player.y][player.x] = '*'; // Define a posição do jogador como uma parede explodida
        for (var y = 0; y < map.length; y++) {
            for (var x = 0; x < map[y].length; x++) {
                if (map[y][x] === '.') {
                    map[y][x] = '*'; // Define as posições vazias como paredes explodidas
                }
            }
        }
        resetPlayerPosition(); // Redefine a posição do jogador
        updateMap(); // Atualiza o mapa
    }, 1000); // 1000 milissegundos (1 segundo) de intervalo antes da restauração
}
var maxHealth = 9;
var currentHealth = 9;

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
    var fillWidth = (currentHealth / maxHealth) * 100;
    document.getElementById('health-bar-fill').style.width = fillWidth + '%';
}

// Chamada de exemplo:
takeDamage(3); // Deduz 10 pontos de vida
heal(20); // Recupera 20 pontos de vida
updateHealthBar(); // Atualiza a barra de vida no HTML


function removeObstacles() {
    // Define as coordenadas dos vizinhos do jogador
    var neighbors = [
        { x: player.x, y: player.y - 1 },  // Acima
        { x: player.x, y: player.y + 1 },  // Abaixo
        { x: player.x - 1, y: player.y },  // Esquerda
        { x: player.x + 1, y: player.y }   // Direita
    ];

    // Verifica se algum vizinho contém um obstáculo
    for (var i = 0; i < neighbors.length; i++) {
        var neighbor = neighbors[i];
        var tile = map[neighbor.y][neighbor.x];
        
        if (tile === '*') {
            // Remove alguns obstáculos (por exemplo, 3 obstáculos)
            map[neighbor.y][neighbor.x] = '.'; // Substitui por um espaço vazio

            // Você pode ajustar a quantidade de obstáculos removidos de acordo com suas necessidades

            updateMap(); // Atualiza o mapa após a remoção do obstáculo
            break; // Encerra o loop assim que um obstáculo for removido
        }
    }
}
// Adiciona evento de escuta de teclado para a tecla "f"
document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyF') {
        removeObstacles(); // Chama a função para remover obstáculos
    }
});
function breakTile(tile) {
    if (tile.classList.contains('bomba')) {
        tile.classList.remove('bomba');
        tile.innerHTML = 'BOOM!';
        
        // Altere o mapa ao explodir a bomba
        var tileIndex = Array.prototype.indexOf.call(tile.parentNode.children, tile);
        var row = Math.floor(tileIndex / map[0].length);
        var col = tileIndex % map[0].length;
        
        // Explodir o centro da explosão (tile atual)
        map[row][col] = '*';
        updateMap();
        
        // Explodir os tiles ao redor (cima, baixo, esquerda, direita)
        var directions = [
            { x: 0, y: -1 }, // Cima
            { x: 0, y: 1 },  // Baixo
            { x: -1, y: 0 }, // Esquerda
            { x: 1, y: 0 }   // Direita
        ];
        
        for (var i = 0; i < directions.length; i++) {
            var direction = directions[i];
            var newRow = row + direction.y;
            var newCol = col + direction.x;
            
            if (newRow >= 0 && newRow < map.length && newCol >= 0 && newCol < map[0].length) {
                var newTile = maze.children[newRow].children[newCol];
                
                if (newTile.classList.contains('bomba')) {
                    breakTile(newTile); // Recursivamente explodir as bombas adjacentes
                } else {
                    map[newRow][newCol] = '*';
                    newTile.innerHTML = '*';
                    newTile.classList.remove('bomba');
                }
            }
        }
    }
    
    // Adicione aqui o restante do código para tratar a quebra do tile (se necessário)
}

