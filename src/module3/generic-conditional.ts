type Fnd = "Best Fnd" | "Toxic Fnd" | "Childhood Fnd"
type RemoveFnd<a, b> = a extends b ? never : a;

type UpdateFnd = RemoveFnd<Fnd, "Toxic Fnd"> 

interface Volume {
    height: string,
    width: string
}
interface MyInfo{
    name: string,
    number: string,
    age: number
}

type Area = {
    [key  in keyof Volume]: number
}
 type Area1<T> ={
    [key in keyof T]: T[key];
 }

 const exe2: Area1<MyInfo> = {
     number: "01720293476",
     name: "Hasan",
     age: 0
 }
const exe1:Area = {
    height: 39,
    width: 34
}

interface Person {

    firstName: string;
  
    lastName: string;
  
  }
  
  
  
  function fullName<T extends Person>(person: T): string {
  
    return `${person.firstName} ${person.lastName}`;
  
  }

  console.log(fullName({firstName: "a", lastName: "k"}));
  