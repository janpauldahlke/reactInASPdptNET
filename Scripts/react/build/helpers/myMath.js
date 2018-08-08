"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyMath = /** @class */ (function () {
    //contructor
    function MyMath() {
    }
    //
    MyMath.prototype.calculateCircle = function (radius) {
        return Math.PI * (radius) * 2;
    };
    MyMath.prototype.calculateRectangle = function (width, height) {
        return width * height;
    };
    return MyMath;
}());
exports.default = MyMath;
