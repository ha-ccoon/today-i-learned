class Player {
  constructor(name, health, skill) {
    this.name = name;
    this.health = health;
    this.skill = skill;
    this.xp = 0;
  }

  sayHello() {
    return `hi ${this.name}`;
  }
}

const minha = new Player('minha', 100, 'reading skill');
console.log(minha.sayHello());
