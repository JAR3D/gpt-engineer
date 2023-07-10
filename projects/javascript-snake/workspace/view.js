class View {
    constructor(game, gameBoard) {
        this.game = game;
        this.gameBoard = gameBoard;
        this.context = this.gameBoard.getContext('2d');
        this.cellSize = this.gameBoard.width / this.game.gridSize;
    }

    // Method to draw the game state
    draw() {
        this.context.clearRect(0, 0, this.gameBoard.width, this.gameBoard.height); // clear canvas

        // draw snake
        this.game.snake.forEach(part => {
            this.context.fillStyle = 'green';
            this.context.fillRect(part.left * this.cellSize, part.top * this.cellSize, this.cellSize, this.cellSize);
        });

        // draw food
        if (this.game.food) {
            this.context.fillStyle = 'red';
            this.context.fillRect(this.game.food.left * this.cellSize, this.game.food.top * this.cellSize, this.cellSize, this.cellSize);
        }
    }
}
