// Holds collections of the asteroids, bullets, and your ship.
//     Game.prototype.step method calls Game.prototype.move on all the objects, 
//     and Game.prototype.checkCollisions checks for colliding objects.
//     Game.prototype.draw(ctx) draws the game.

// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./utils.js");


function Game (){
    this.asteroids = [];
    this.addAsteroids();
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function () {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        let astr = new Asteroid({ 
            pos: this.randomPosition(),
            game: this
        });
        this.asteroids.push(astr);
    }
}

Game.prototype.randomPosition = function () {
    return [Math.floor(Game.DIM_X * Math.random()), Math.floor(Game.DIM_Y * Math.random())];
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fill();

    this.asteroids.forEach(function(ele) {
        ele.draw(ctx);
    });
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function(ele) {
            ele.move();
    });
}

Game.prototype.wrap = function (pos) {
    if (pos[0] <= 0 ) {
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

Game.prototype.checkCollisions = function () {
    for (let i = 0; i < this.asteroids.length-1; i++) { // 0,1,2,3,4,5,6,7,8
        for (let j = i+1; j < this.asteroids.length; j++) { // 1,2,3,4,5,6,7,8,9
            let astra1 = this.asteroids[i];
            let astra2 = this.asteroids[j];
        
            if (astra1.isCollidedWith(astra2)) {
                //alert("COLLISION");
                astra1.collideWith(astra2);
            }
        }
    }
}

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function (asteroid) {
    let i = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(i,1);
} 


module.exports = Game;




