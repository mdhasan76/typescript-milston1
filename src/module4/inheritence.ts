class Student{
    additionAge: number
    constructor(public names: string, public age: number, additionAge: number  ){
        this.additionAge = additionAge
    }

    calledStudent():string{
        return `Hello ${this.names}. is your age ${this.age}?`
    }

    set boiyos(param: number){
       this.additionAge =  this.additionAge + param;
    } 
}

const salauddin = new Student("Salauddin", 22, 22)
salauddin.boiyos = 5 
console.log(salauddin.boiyos);

class Teacher extends Student{
    constructor(names: string,age: number,public designation: string, additionAge: number){
        super(names, age, additionAge)
    }


    teacherCalled():string{
        return `are you a teacher mr.${this.names}`
    }

}

// Set ages(param: number): number {
//  const addition = this.age + param ;
//  return addition
// }

const rajon = new Teacher("Shahria Rajon",30,"Accounting", 40);
// console.log(rajon.calledStudent());