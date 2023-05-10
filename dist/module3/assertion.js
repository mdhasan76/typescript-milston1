"use strict";
let robin;
robin = "My name is Robin";
robin = 23;
// console.log(robin);
const getGram = (param) => {
    if (typeof param === "number") {
        let res = 0;
        res = 1000 * param;
        return res;
    }
    else if (typeof param === 'string') {
        let res = 0;
        res = 1000 * parseFloat(param);
        return res;
    }
};
const res = getGram("43");
// console.log(res);
//Overrid ts type by using type assertion
let assertion_any = "hasan";
const assertion_number = assertion_any;
const user = {
    name: "hasan",
    age: 21,
    address: "Sarail"
};
const rollNumber = [1, 2, 3];
