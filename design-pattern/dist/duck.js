"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../strategy-pattern/client");
var concreate_class_1 = require("../strategy-pattern/concreate-class");
// class MiniDuckSimulator {
//   static main(): void {
//     const realDuck = new Duck(new FlyWithWings(), new Squeak());
//     realDuck.performFly();
//     realDuck.performQuack();
//   }
// }
// MiniDuckSimulator.main();
var flyingDuck = new client_1.Duck(new concreate_class_1.FlyWithWings(), new concreate_class_1.Squeak());
flyingDuck.performFly(); // 날고 있습니다!
flyingDuck.performQuack(); //
