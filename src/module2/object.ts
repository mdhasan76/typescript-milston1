type A_Hakim={
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string
} 

const a_hakim:A_Hakim= {
    name: "A. Hakim",
    age: 21,
    isMarried: true,
    wife: "Nadira"
}
a_hakim.name = "Abdul Hakim";
// a_hakim.wife = "Nadira"
type Oparetion =(x: number, y: number)=> number
const calculate = (
    num1: number,
     num2: number, 
     oparetion:Oparetion) : void =>{
        const res = oparetion(num1, num2)
        console.log(res);
}

calculate(10, 10, (x, y) => x + y)
calculate(5, 10, (x, y) => x * y)