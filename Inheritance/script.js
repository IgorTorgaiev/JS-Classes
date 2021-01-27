// Class Inheritance

class Game {
    constructor(name) {
        this.name = name;
    }
    present() {
        return 'The game I like playing is ' + this.name;
    }
}
class Other extends Game {
    constructor(name, learn) {
        super(name);
        this.learn = learn;
    }
    show() {
        return this.present() + '. And, the other game I want to learn to play is ' + this.learn + '.';
    }
}
let theOther = new Other("checkers", "chess");
document.getElementById("demo1").innerHTML = theOther.show();

// Getters and Setters

class Electronics {
    constructor(phone) {
        this.device = phone;
    }
    get dev() {
        return this.device;
    }
    set dev(x) {
        this.device = x;
    }
}
let theElectronics = new Electronics("Smartphone");
// theElectronics.device = "Tablet"; 
document.getElementById("demo2").innerHTML =  theElectronics.dev;

// Getters and Setters with underscore

class Car {
    constructor(brand) {
        this._truck = brand;
    }
    get truck() {
        return this._truck;
    }
    set truck (y) {
        this._truck = y;
    }
}
let theCar = new Car("Scania");
// theCar.truck = "Volvo";
document.getElementById("demo3").innerHTML = theCar.truck;