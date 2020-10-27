/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Spacerock.It inherits from MovingObject\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction Asteroid(options) {\n    options.radius = 20;\n    options.color = \"#808080\"; \n    options.vel = Util.randomVec(5);\n\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 93:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Holds collections of the asteroids, bullets, and your ship.\n//     Game.prototype.step method calls Game.prototype.move on all the objects, \n//     and Game.prototype.checkCollisions checks for colliding objects.\n//     Game.prototype.draw(ctx) draws the game.\n\n// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nfunction Game (){\n    this.asteroids = [];\n    this.addAsteroids();\n}\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 10;\n\nGame.prototype.addAsteroids = function () {\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        let astr = new Asteroid({ \n            pos: this.randomPosition(),\n            game: this\n        });\n        this.asteroids.push(astr);\n    }\n}\n\nGame.prototype.randomPosition = function () {\n    return [Math.floor(Game.DIM_X * Math.random()), Math.floor(Game.DIM_Y * Math.random())];\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)\n    ctx.fillStyle = '#000000';\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fill();\n\n    this.asteroids.forEach(function(ele) {\n        ele.draw(ctx);\n    });\n}\n\nGame.prototype.moveObjects = function () {\n    this.asteroids.forEach(function(ele) {\n            ele.move();\n    });\n}\n\nGame.prototype.wrap = function (pos) {\n    if (pos[0] <= 0 ) {\n        pos[0] = Game.DIM_X; //+ (pos[0] % Game.DIM_X);\n    } else if (pos[0] > Game.DIM_X) {\n        pos[0] = 0;//pos[0] % Game.DIM_X;\n    };\n    \n    if (pos[1] <= 0) {\n        pos[1] = Game.DIM_Y; //+ (pos[1] % Game.DIM_Y);\n    } else if (pos[1] > Game.DIM_Y) {\n        pos[1] = 0;//pos[1] % Game.DIM_Y;\n    };\n    \n    return pos;\n}\n\nGame.prototype.checkCollisions = function () {\n    for (let i = 0; i < this.asteroids.length-1; i++) { // 0,1,2,3,4,5,6,7,8\n        for (let j = i+1; j < this.asteroids.length; j++) { // 1,2,3,4,5,6,7,8,9\n            let astra1 = this.asteroids[i];\n            let astra2 = this.asteroids[j];\n        \n            if (astra1.isCollidedWith(astra2)) {\n                //alert(\"COLLISION\");\n                astra1.collideWith(astra2);\n            }\n        }\n    }\n}\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function (asteroid) {\n    let i = this.asteroids.indexOf(asteroid);\n    this.asteroids.splice(i,1);\n} \n\n\nmodule.exports = Game;\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Stores a Game instance.\n// Stores a canvas context to draw the game into.\n// Installs key listeners to move the ship and fire bullets.\n// Installs a timer to call Game.prototype.step.\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView (game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n    let that = this\n    setInterval(function() {\n        that.game.step(); // call \n        that.game.draw(that.ctx);\n    }, 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("// MovingObject(src / moving_object.js)\n// Base class for anything that moves.\n// Most important methods are MovingObject.prototype.move, MovingObject.prototype.draw(ctx), \n// MovingObject.prototype.isCollidedWith(otherMovingObject).\n\nfunction MovingObject (options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n    ctx.stroke();\n\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function () {\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n    this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    const centerD = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);\n    return centerD < (this.radius + otherObject.radius);\n}\n\nMovingObject.prototype.collideWith = function (otherObject) {\n    if (this.isCollidedWith(otherObject)) {\n        this.game.remove(this);\n        this.game.remove(otherObject);\n    };\n}\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("// Utility code, especially vector math stuff.\n\n\nconst Util = {\n    inherits(childClass, parentClass) {\n        function Surr() { };\n        Surr.prototype = parentClass.prototype;\n        childClass.prototype = new Surr();\n        childClass.prototype.constructor = childClass;\n    },\n\n    // Return a randomly oriented vector with the given length.\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n    \n};\n\n\n\nmodule.exports = Util;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Distance\n// To find the \"distance\" between two points, the formula is:\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n\n\n// Norm\n// A vector has a norm, a.k.a.magnitude or length.The norm of a velocity vector is a speed.\n// If obj.vel = [3, 4](3 horizontal pixels and 4 vertical pixels per unit time) \n// then the overall speed is 5 pixels per unit time.\n// You can easily calculate the norm of a vector using your distance function:\n//  Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n// const MovingObject = require(\"./moving_object\");\n// const Asteroid = require(\"./asteroid.js\");\n\n// window.MovingObject = MovingObject;\n// window.Game = Game;\n\n// event listener waits for html to load before executing callback\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvasEl = document.getElementById('game-canvas');\n    const ctx = canvasEl.getContext('2d');\n\n    canvasEl.width = Game.DIM_X; \n    canvasEl.height = Game.DIM_Y;\n    \n    \n    const game = new Game();\n    const gameView = new GameView(game, ctx);\n    gameView.start();\n    \n    \n});\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// mo.draw(ctx);\n\n// const astra = new Asteroid({\n//     pos: [50, 50]\n// });\n\n// astra.draw(ctx);\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;