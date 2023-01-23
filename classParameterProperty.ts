// class Person {
//     public fname:string;
//     public age:number;
//     constructor(fname:string, age:number) {
//         this.fname = fname;
//         this.age =age;
//     }
// }

// const jack = new Person('Jack',30);
// console.log(jack.fname,jack.age);

// we dont have write duplicate code for property so we use class parameter property

class Person {
    
    constructor(public fname:string,public age:number) {
        
    }
}

const jack = new Person('Jack',30);
console.log(jack.fname,jack.age);