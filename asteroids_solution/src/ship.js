// This is you! Another MovingObject subclass.
const MovingObject = require("./moving_object");
const Util = require("./util");

const COLORS = ["#808000", "#FF0000", "#800000"]

function Ship (options) {
    options.radius = 10;
    options.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    options.vel = [0, 0];

    MovingObject.call(this, options);
}