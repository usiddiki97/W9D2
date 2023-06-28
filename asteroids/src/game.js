const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid");

function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.DIM_X = 1000;
Game.DIM_Y = 1000;
Game.NUM_ASTEROIDS = 10;

Game.prototype.randomPosition = function() {
    return [Math.floor(Game.DIM_X * Math.random()), Math.floor(Game.DIM_Y * Math.random())];
}

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        let ast = new Asteroid({
            pos: this.randomPosition(),
            game: this
        });
        this.asteroids.push(ast);
    }
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach((ast)=> ast.draw(ctx));
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach((ast) => ast.move());
}

Game.prototype.wrap = function (pos) {
    if (pos[0] <= 0) {
        pos[0] = Game.DIM_X; //+ (pos[0] % Game.DIM_X);
    } else if (pos[0] > Game.DIM_X) {
        pos[0] = 0;//pos[0] % Game.DIM_X;
    };

    if (pos[1] <= 0) {
        pos[1] = Game.DIM_Y; //+ (pos[1] % Game.DIM_Y);
    } else if (pos[1] > Game.DIM_Y) {
        pos[1] = 0;//pos[1] % Game.DIM_Y;
    };

    return pos;
}

module.exports = Game;
