"use strict";
const a_hakim = {
    name: "A. Hakim",
    age: 21,
    isMarried: true,
    wife: "Nadira"
};
a_hakim.name = "Abdul Hakim";
const calculate = (num1, num2, oparetion) => {
    const res = oparetion(num1, num2);
    console.log(res);
};
calculate(10, 10, (x, y) => x + y);
calculate(5, 10, (x, y) => x * y);
