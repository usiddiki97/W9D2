const MovingObject = require("./moving_object");
const Util = require("./util")

function Asteroid(options) {
    options.color = Asteroid.COLOR
    options.radius = Asteroid.RADIUS;
    options.vel = Util.randomVec(5);
    MovingObject.call(this, options);
}

Asteroid.COLOR = "gray";
Asteroid.RADIUS = 20;

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;