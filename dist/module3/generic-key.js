"use strict";
const a = "motherboard";
const desktop = {
    proccessor: "AMD",
    motherboard: "ASOS",
    ssd: "Kingsman"
};
const genericKey = (obj, key) => {
    return [key];
};
const ex1 = genericKey(desktop, "motherboard");
const ex2 = genericKey({ motherboard: "ABD", proccessor: "", ssd: "" }, "motherboard");
// const ex3 = genericKey({brand: "AMD"}, "brand");
// console.log(NewType);
console.log(ex2);
