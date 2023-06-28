const Game = require("./game.js");
const GameView = require("./game_view.js");
// const MovingObject = require("./moving_object");
// const Asteroid = require("./asteroid.js");

// window.MovingObject = MovingObject;
// window.Game = Game;

// event listener waits for html to load before executing callback
document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext('2d');

    canvasEl.width = Game.DIM_X; 
    canvasEl.height = Game.DIM_Y;
    
    
    const game = new Game();
    const gameView = new GameView(game, ctx);
    gameView.start();
    
    
});

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

// mo.draw(ctx);

// const astra = new Asteroid({
//     pos: [50, 50]
// });

// astra.draw(ctx);