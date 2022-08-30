
class Ninja {
    constructor(name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Name: ${this.name}`)
        return this
    }
    
    showStats(){
        console.log(
            `
            Name: ${this.name}
            Strength: ${this.strength}
            Speed: ${this.speed}
            Health: ${this.health}
            `)
            return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName().drinkSake().showStats();


export default Ninja