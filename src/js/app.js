class Char {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

class Team {
  constructor() {
    this.members = [];
  }

  addMember(...members) {
    this.members.push(...members);
  }

  [Symbol.iterator]() {
    let counter = 0;
    const { members } = this;

    return {
      next() {
        if (counter < members.length) {
          return {
            done: false,
            value: members[counter++],
          };
        }
        return {
          done: true,
          value: undefined,
        };
      },
    };
  }
}

const instance = new Char('Лучник', 'Bowman', 50, 1, 40, 10);
const instance2 = new Char('Лучник', 'Bowman', 50, 1, 40, 10);
const instance3 = new Char('Лучник', 'Bowman', 50, 1, 40, 10);
const instance4 = new Char('Лучник', 'Bowman', 50, 1, 40, 10);

const team = new Team();

team.addMember(instance, instance2, instance3, instance4);

const iterator = team[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
