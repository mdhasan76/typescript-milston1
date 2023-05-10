let robin:any;

(robin as string) = "My name is Robin";
(robin as number) = 23;
// console.log(robin);

const getGram = (param: number | string): number | string | undefined=>{
    if(typeof param === "number"){
        let res= 0;
        res = 1000 * param
        return res
    }else if(typeof param === 'string'){
        let res= 0;
        res = 1000 * parseFloat(param);
        return res
    }
}
const res = <number>getGram("43")
// console.log(res);

//Overrid ts type by using type assertion
let assertion_any: any = "hasan";
const assertion_number: number = <number>assertion_any;

// console.log(assertion_number);

interface Iuser{
    name: string;
    age: number;
}

interface IextendUser extends Iuser{
    address: string;
}

type  User={
    name: string;
    age: number;
}
type ExtendUser = User &{
    address: string
}
const user: ExtendUser ={
    name: "hasan",
    age: 21,
    address: "Sarail"
}
// console.log(user);
interface IroleNumber {
    [index: number]:number
}
const rollNumber: IroleNumber = [1,2,3]