"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
var Duck = /** @class */ (function () {
    function Duck(flyBehavior, quackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    return Duck;
}());
exports.Duck = Duck;
// const flyingDuckWithWings = new Duck()
