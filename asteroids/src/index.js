// console.log("Webpack is working!")

const MovingObject = require("./moving_object");
const Util = require("./util");
const Asteroid = require("./asteroid");
const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    const game = new Game();
    const gV = new GameView(game, ctx);
    gV.start();
})


window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;
window.Game = Game;