// Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game.prototype.step.

const Game = require("./game.js");

function GameView (game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    let that = this
    setInterval(function() {
        that.game.step(); // call 
        that.game.draw(that.ctx);
    }, 20);
}

module.exports = GameView;