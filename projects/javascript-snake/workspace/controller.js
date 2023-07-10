window.onload = function() {
    const game = new Game();
    const view = new View(game, document.getElementById('game-board'));

    // Function to update the game state and redraw the game board
    function update() {
        game.updateSnake();
        game.checkFood();
        view.draw();

        if (game.isGameOver()) {
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(update, 100);

    // Event listener for arrow keys
    window.onkeydown = function(event) {
        const directions = {
            'ArrowUp': 'UP',
            'ArrowRight': 'RIGHT',
            'ArrowDown': 'DOWN',
            'ArrowLeft': 'LEFT'
        };

        if (directions[event.key]) {
            game.changeDirection(directions[event.key]);
        }
    };
};
