var spikeTouchCount = 0;

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
        spikeTouchCount++;
        
        if (spikeTouchCount === 3) {
            playerDies(); // Chamar a função para o jogador morrer
            return; // Parar a execução da função
        }
        
        takeDamage(10); // Deduzir 10 pontos de vida do jogador

        resetPlayerPosition(); // Redefinir a posição do jogador
        updateHealthBar(); // Atualizar a barra de vida
    } else if (map[toY][toX] === 'B') {
        // Lógica para a bomba aqui
        // ...
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

function takeDamage(amount) {
    currentHealth -= amount;
}

function playerDies() {
    // Código para quando o jogador morre
    // Por exemplo, exibir uma tela de game over e reiniciar o jogo
    maze.innerHTML = 'Game Over!';
    document.getElementById('buttons').innerHTML = '';
    // Restante do código para reiniciar o jogo ou tomar outras ações necessárias
}
function explodeTile() {
    // Obter a posição atual do jogador
    var playerX = player.x;
    var playerY = player.y;
  
    // Realizar ações com base na posição do jogador após a explosão
    // Exemplo: remover a bomba do mapa
    map[playerY][playerX] = '.';
  
    // Exemplo: definir a posição afetada pela explosão como uma parede
    map[playerY - 1][playerX] = '*'; // Acima
    map[playerY + 1][playerX] = '*'; // Abaixo
    map[playerY][playerX - 1] = '*'; // À esquerda
    map[playerY][playerX + 1] = '*'; // À direita
  
    // Atualizar o mapa
    updateMap();
  
    // Realizar outras ações necessárias após a explosão
  }
  