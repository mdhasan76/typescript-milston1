"use strict";
class BestFriend {
    // public name: string;
    // private age: number;
    // eyeColor: string;
    // isMarried: boolean;
    //parameter properties
    constructor(name, age, eyeColor, isMarried) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
        this.isMarried = isMarried;
        // this.name = name;
        // this.age = age;
        // this.eyeColor = eyeColor;
        // this.isMarried = isMarried
    }
    makeQuest() {
        return (`${this.name} is my best friend. his age is ${this.age} now, eye is ${this.eyeColor} color. also is ${this.isMarried ? "Married" : "Unmarried"}`);
    }
}
const robin1 = new BestFriend("RF Robin", 21, "Black", false);
const nayeem = new BestFriend("Nayeem", 22, "Gray", false);
console.log(nayeem.makeQuest());
console.log();
