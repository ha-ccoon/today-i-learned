import { Duck } from './client';
import { FlyWithWings, Squeak } from './concreate-class';

const flyingDuck = new Duck(new FlyWithWings(), new Squeak());
flyingDuck.performFly();
flyingDuck.performQuack();
