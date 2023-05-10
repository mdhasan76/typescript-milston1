interface  Desktop{
    proccessor: string,
    motherboard: string,
    ssd: string
}
type KeyOfObj = keyof Desktop;
type ABC = "name" | "something"

const a: KeyOfObj = "motherboard"

const desktop ={
    proccessor: "AMD",
    motherboard: "ASOS",
    ssd: "Kingsman"
} 

const genericKey = <x extends Desktop, y extends keyof x>(obj:x, key: y ) =>{
    return [key]
}


const ex1 = genericKey<Desktop, KeyOfObj>(desktop, "motherboard" );
const ex2 = genericKey({motherboard: "ABD", proccessor: "", ssd: ""}, "motherboard");
// const ex3 = genericKey({brand: "AMD"}, "brand");
// console.log(NewType);
console.log(ex2);