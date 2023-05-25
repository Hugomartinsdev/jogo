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
}var map, player = { x: 1, y: 8, lives: 3 }, i, maze = document.getElementById('maze'), win;
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
var map, player = { x: 1, y: 8, lives: 3 }, i, maze = document.getElementById('maze'), win;

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
        takeDamage(); // Deduzir uma vida do jogador
        if (player.lives > 0) {
            resetPlayerPosition(); // Redefinir a posição do jogador
            updateHealthBar(); // Atualizar a barra de vida
            alert("Você tomou dano. Vidas restantes: " + player.lives);
        } else {
            gameOver(); // O jogador perdeu todas as vidas
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

function takeDamage() {
    player.lives--; // Deduzir uma vida do jogador
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
    alert("Game Over! Você perdeu todas as vidas.");
    // ...
 
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
    }

    function takeDamage(amount) {
        player.lives--; // Deduzir uma vida do jogador
    }

    function resetPlayerPosition() {
        player.x = 1; // Definir a posição inicial do jogador
        player.y = 8;
    }

    function updateHealthBar() {
        // Atualizar a barra de vida do jogador
        var healthBarFill = document.getElementById('health-bar-fill');
        var percentage = (player.lives / 3) * 100; // Calcular a porcentagem de vidas restantes
        healthBarFill.style.width = percentage + '%'; // Definir a largura da barra de vida
    }

    function gameOver() {
        alert("Game Over! Você tocou nos espinhos três vezes.");
        // Aqui você pode adicionar o código para reiniciar o jogo ou realizar outras ações após o game over
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
}

function takeDamage(amount) {
    player.lives--; // Deduzir uma vida do jogador
}

function resetPlayerPosition() {
    player.x = 1; // Definir a posição inicial do jogador
    player.y = 8;
}

function updateHealthBar() {
    // Atualizar a barra de vida do jogador
    var healthBarFill = document.getElementById('health-bar-fill');
    var percentage = (player.lives / 3) * 100; // Calcular a porcentagem de vidas restantes
    healthBarFill.style.width = percentage + '%'; // Definir a largura da barra de vida
}

function gameOver() {
    alert("Game Over! Você tocou nos espinhos três vezes.");
    // Aqui você pode adicionar o código para reiniciar o jogo ou realizar outras ações após o game over
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
            loseGame(); // O jogador perdeu o jogo
        } else {
            resetPlayerPosition(); // Redefinir a posição do jogador
            updateHealthBar(); // Atualizar a barra de vida
            alert("Você tomou dano.");
        }
    }
}

function takeDamage(amount) {
    player.lives--; // Deduzir uma vida do jogador
    if (player.lives <= 0) {
        loseGame(); // O jogador perdeu o jogo
    }
}

function resetPlayerPosition() {
    player.x = 1; // Definir a posição inicial do jogador
    player.y = 8;
}

function updateHealthBar() {
    // Atualizar a barra de vida do jogador
    var healthBarFill = document.getElementById('health-bar-fill');
    var percentage = (player.lives / 3) * 100; // Calcular a porcentagem de vidas restantes
    healthBarFill.style.width = percentage + '%'; // Definir a largura da barra de vida
}

function loseGame() {
    alert("Game Over! Você tocou nos elementos três vezes.");
    // Aqui você pode adicionar o código para reiniciar o jogo ou realizar outras ações após perder o jogo
}
