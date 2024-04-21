class ProgrammingLanguage {
  constructor(name, age, technology) {
    this.name = name;
    this.age = age;
    this.technology = technology;
  }
  talk() {
    console.log(`Hey, i am ${this.name} and my age is ${this.age}`);
  }
}

class Person1 extends ProgrammingLanguage {
  constructor(name, age, technology) {
    super(name, age, technology);
  }
}

class Person2 extends ProgrammingLanguage {
  constructor(name, age, technology) {
    super(name, age, technology);
  }
}

let p1 = new Person1("Sarita Maurya", 23, "JAVA");
let p2 = new Person1("Harsh Maurya", 23, "Python");

console.log(p1);
console.log(p2);
console.log(p1.talk(), p2.talk());
