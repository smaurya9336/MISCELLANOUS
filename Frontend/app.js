// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, my name is ${this.name}`);
//     },
//   };
//   return person;
// }

// let p1 = personMaker("Sarita", 23);
// console.log(p1);
// console.log(p1.talk());

//  Constructor -- doesn't return anything

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`Hi, my name is ${this.name}`);
};

let p1 = new Person("sarita", 23);
let p2 = new Person("Ayushi", 23);

console.log(p1, p2);
console.log(p1.talk === p2.talk);
// const accountInfo = {
//   username: "Sarita",
//   age: 23,
//   accountNumber: 2343234235,
//   adress: "lucknow",
// };

// const accountInfo2 = {
//   username: "Harsh",
//   age: 23,
//   accountNumber: 2343234235,
//   adress: "lucknow",
// };

// const accountInfo3 = {
//   username: "Mayank",
//   age: 23,
//   accountNumber: 2343234235,
//   adress: "lucknow",
// };
