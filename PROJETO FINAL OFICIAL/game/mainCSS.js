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
  
      // Faz os elementos do mapa voarem pela tela
      var elements = document.getElementsByClassName('maze-element');
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var topOffset = Math.floor(Math.random() * 800) - 400; // Define um deslocamento aleatório para cima
        var leftOffset = Math.floor(Math.random() * 800) - 400; // Define um deslocamento aleatório para a esquerda
        element.style.transform = 'translate(' + leftOffset + 'px, ' + topOffset + 'px)';
        element.style.opacity = '0'; // Torna o elemento transparente
      }
    }, 1000); // 1000 milissegundos (1 segundo) de intervalo antes da restauração
  }
  