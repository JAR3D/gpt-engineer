class Game {
    constructor() {
        this.gridSize = 20;
        this.snake = [{ top: 10, left: 10 }];
        this.direction = 'RIGHT';
        this.food = null;
    }

    // Method to update the snake's position based on the current direction
    updateSnake() {
        const head = Object.assign({}, this.snake[0]); // copy head

        switch (this.direction) {
            case 'LEFT':
                head.left--;
                break;
            case 'UP':
                head.top--;
                break;
            case 'RIGHT':
                head.left++;
                break;
            case 'DOWN':
                head.top++;
                break;
        }

        this.snake.unshift(head); // add new head to snake
    }

    // Method to check if the snake has eaten the food
    checkFood() {
        if (this.food && this.snake[0].top === this.food.top && this.snake[0].left === this.food.left) {
            this.food = null; // remove food
        } else {
            this.snake.pop(); // remove tail
        }
    }

    // Method to check if the game is over
    isGameOver() {
        const head = this.snake[0];
        return head.top < 0 || head.left < 0 || head.top >= this.gridSize || head.left >= this.gridSize || this.snake.some((_, i) => i !== 0 && _.top === head.top && _.left === head.left);
    }

    // Method to change the direction of the snake
    changeDirection(newDirection) {
        const directions = {
            'UP': 'DOWN',
            'RIGHT': 'LEFT',
            'DOWN': 'UP',
            'LEFT': 'RIGHT'
        };

        if (directions[newDirection] !== this.direction) {
            this.direction = newDirection;
        }
    }
}
