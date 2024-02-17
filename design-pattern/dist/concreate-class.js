"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedHat = exports.Squeak = exports.FlyNoWay = exports.FlyWithFeet = exports.FlyWithWings = void 0;
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log('fly with wings');
    };
    return FlyWithWings;
}());
exports.FlyWithWings = FlyWithWings;
var FlyWithFeet = /** @class */ (function () {
    function FlyWithFeet() {
    }
    FlyWithFeet.prototype.fly = function () {
        console.log('fly with feet');
    };
    return FlyWithFeet;
}());
exports.FlyWithFeet = FlyWithFeet;
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log('cannot fly');
    };
    return FlyNoWay;
}());
exports.FlyNoWay = FlyNoWay;
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        console.log('quack by squeek');
    };
    return Squeak;
}());
exports.Squeak = Squeak;
var RedHat = /** @class */ (function () {
    function RedHat() {
    }
    RedHat.prototype.display = function () {
        console.log('duck with red hair');
    };
    return RedHat;
}());
exports.RedHat = RedHat;
