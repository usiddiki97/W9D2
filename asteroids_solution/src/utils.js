// Utility code, especially vector math stuff.


const Util = {
    inherits(childClass, parentClass) {
        function Surr() { };
        Surr.prototype = parentClass.prototype;
        childClass.prototype = new Surr();
        childClass.prototype.constructor = childClass;
    },

    // Return a randomly oriented vector with the given length.
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },

    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
    
};



module.exports = Util;























// Distance
// To find the "distance" between two points, the formula is:
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)


// Norm
// A vector has a norm, a.k.a.magnitude or length.The norm of a velocity vector is a speed.
// If obj.vel = [3, 4](3 horizontal pixels and 4 vertical pixels per unit time) 
// then the overall speed is 5 pixels per unit time.
// You can easily calculate the norm of a vector using your distance function:
//  Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])