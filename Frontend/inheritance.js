class Person {
  constructor(name, age) {
    console.log("Person class constructor.");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hey, i am ${this.name}`);
  }
}
class Student extends Person {
  constructor(name, age, marks) {
    console.log("Student class constructor");
    super(name, age);
    this.marks = marks;
  }
}

let stu1 = new Student("Tom", 14, 98);
console.log(stu1.talk());
console.log(stu1);

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let teacher1 = new Teacher("Sarita", 24, "english");
console.log(teacher1);
console.log(teacher1.talk());
