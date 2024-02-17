import { IDisplayBehavior, IFlyBehavior, IQuackBehavior } from './interface';

export class FlyWithWings implements IFlyBehavior {
  fly() {
    console.log('fly with wings');
  }
}

export class FlyWithFeet implements IFlyBehavior {
  fly(): void {
    console.log('fly with feet');
  }
}

export class FlyNoWay implements IFlyBehavior {
  fly(): void {
    console.log('cannot fly');
  }
}

export class Squeak implements IQuackBehavior {
  quack(): void {
    console.log('quack by squeek');
  }
}

export class RedHat implements IDisplayBehavior {
  display(): void {
    console.log('duck with red hair');
  }
}
