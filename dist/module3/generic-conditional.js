"use strict";
const exe2 = {
    number: "01720293476",
    name: "Hasan",
    age: 0
};
const exe1 = {
    height: 39,
    width: 34
};
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
console.log(fullName({ firstName: "a", lastName: "k" }));
