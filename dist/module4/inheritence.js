"use strict";
class Student {
    constructor(names, age, additionAge) {
        this.names = names;
        this.age = age;
        this.additionAge = additionAge;
    }
    calledStudent() {
        return `Hello ${this.names}. is your age ${this.age}?`;
    }
    set boiyos(param) {
        this.additionAge = this.additionAge + param;
    }
}
const salauddin = new Student("Salauddin", 22, 22);
salauddin.boiyos = 5;
console.log(salauddin.boiyos);
class Teacher extends Student {
    constructor(names, age, designation, additionAge) {
        super(names, age, additionAge);
        this.designation = designation;
    }
    teacherCalled() {
        return `are you a teacher mr.${this.names}`;
    }
}
// Set ages(param: number): number {
//  const addition = this.age + param ;
//  return addition
// }
const rajon = new Teacher("Shahria Rajon", 30, "Accounting", 40);
// console.log(rajon.calledStudent());
