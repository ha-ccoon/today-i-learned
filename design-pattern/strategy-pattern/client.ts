import { IFlyBehavior, IQuackBehavior } from './interface';

export class Duck {
  flyBehavior: IFlyBehavior;
  quackBehavior: IQuackBehavior;

  constructor(flyBehavior: IFlyBehavior, quackBehavior: IQuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }
}

// const flyingDuckWithWings = new Duck()
