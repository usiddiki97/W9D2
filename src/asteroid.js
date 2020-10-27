// Spacerock.It inherits from MovingObject
const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(options) {
    options.radius = 20;
    options.color = "#808080"; 
    options.vel = Util.randomVec(5);

    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;