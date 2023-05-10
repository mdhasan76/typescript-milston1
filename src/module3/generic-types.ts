
type CommonGen<a, b> = [a,b]; 
const genericNumRoll:CommonGen<number, number>= [1,5];
const genericStrRoll:CommonGen<string, string>= ["a", "b"];
const genericBooleanRoll:CommonGen<boolean, boolean>= [true, false];
const genericObjBooleanRoll:Array<{name: string, isMarried: boolean}>=[
    {
        name: "hasan",
        isMarried: false
    },
    {
        name: "Robin",
        isMarried: false
    },
] ;
// console.log(genericObjBooleanRoll);

//Tuple type
const tupleArr: [{brand: string, madeIn: string, isVaryfied: boolean}, string, number] = [{brand: "VIVO", madeIn: "India",isVaryfied: true}, "worldCup", 2012 ];

type GenericTuple<x,y>=[x, y];

const relation: GenericTuple<number, string> = [12, "23"]
const GenericAdbanced: GenericTuple<User, string> = [{age: 23, name: "Hasan"}, "23"]

// Video 4
interface NextLavel<price, arr= null>{
    provider: "Programing Hero",
    for: string,
    price: price,
    instractor?: arr 
}
type Price={
    graduate: number,
    non_graduate: number
}
type Instractor =[string, string, boolean];
const nextLevel: NextLavel<Price, Instractor> = {
    provider: "Programing Hero",
    for: "P Hero Graduate",
    price: {
        graduate: 4500,
        non_graduate: 5000
    },
    instractor: ["Abedin", "Mir", true]
}
console.log(nextLevel);