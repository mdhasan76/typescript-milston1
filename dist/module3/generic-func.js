"use strict";
const genFunc = (param) => {
    return [param];
};
const result = genFunc("BD");
const genFn = (param) => {
    return [param];
};
const genFn1 = genFn({ name: "hasan", age: 34 });
console.log(genFn1);
