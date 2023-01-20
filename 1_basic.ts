//parent class , Base class , Superclass
 class Animal {
    name: string;
    // parameterised constructor
    constructor(name: string) {
        this.name = name;}
        move(distnace: number) {
            console.log(`${distnace}`);
        }
        }
        // child class , sub , derivedclass
        class Dog extends Animal {
            constructor(name: string) {
                super(name);
            }
            bark(){
                console.log('bho bho');
            }
        }
        var objDog = new Dog("test");
        objDog.bark();
        objDog.move(10);

        export {}