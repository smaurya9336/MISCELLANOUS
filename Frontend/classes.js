class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hey, my name is ${this.name} and my age is ${this.age}`);
  }
}
let p1 = new Person("Tom", 12);
let p2 = new Person("Jerry", 13);

console.log(p1);
console.log(p2);

console.log(p1.talk === p2.talk);
