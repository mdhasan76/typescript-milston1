const genFunc = (param: string): string[]=>{
    return [param]
}

const result = genFunc("BD");

const genFn = <T>(param:T): T[]=>{
    return [param]
}

const genFn1 = genFn<User>({name: "hasan", age: 34})
console.log(genFn1);