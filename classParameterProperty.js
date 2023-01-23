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
var Person = /** @class */ (function () {
    function Person(fname, age) {
        this.fname = fname;
        this.age = age;
    }
    return Person;
}());
var jack = new Person('Jack', 30);
console.log(jack.fname, jack.age);
