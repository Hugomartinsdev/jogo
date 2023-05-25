function detonateBomb() {
    if (map[player.y][player.x] === 'B') {
        // Remover a bomba do mapa
        map[player.y][player.x] = '.';

        // Percorrer todas as posições do mapa e remover os asteriscos
        for (var y = 0; y < map.length; y++) {
            for (var x = 0; x < map[y].length; x++) {
                if (map[y][x] === '*') {
                    map[y][x] = '.';
                }
            }
        }

        updateMap();
    }
}
