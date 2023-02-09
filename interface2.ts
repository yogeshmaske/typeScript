abstract class Car {
    wheel():string{
        return "4 wheeler";
    }
    cheackAc():string {
         return "Ac is Available";
    }
    callFacility():string{
        return "Call Facility supported";
    }
    abstract price():number;
    abstract getTotalSeats():number;
    abstract color():string;

}

interface IGps{
    gps:boolean;
}

class Toyota extends Car implements IGps {
    gps: boolean = false;
    price(): number {
        return 100000;
    }
    getTotalSeats(): number {
           return 5;
    }
    color(): string {
    return 'white'
    }
    
};


class Hundyai extends Car implements IGps {
    gps: boolean = true;
    price(): number {
        return 900000
    }
    getTotalSeats(): number {
        return 7;
    }
    color(): string {
        return 'gray'
    }

}


const toyota = new Toyota();
const hundyai = new Hundyai();

console.log("Is Toyota Having GPS:",toyota.gps);
console.log("Is Hundyai having GPS",hundyai.gps);





