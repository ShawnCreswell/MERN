// Four pillars of OOP
// APIE
// Abstraction
// Polymorphism
// Inheritance
// Encapsulation


class Vehicle {
    
    constructor(manufacturer, model, color){
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    drive() {
        this.miles += 10;
        return this;
    }
    
    beep(){
        console.log('BEEP! BEEP');
        return this;
    }

    showStats() {
        console.log(
            `
            Manufacturer: ${this.manufacturer}
            Model: ${this.model} \nMiles: ${this.miles}
            Color: ${this.color}
            `)
            return this;
    }

}

export default Vehicle
// myCar.drive().drive().beep();

