import Ninja from "./ninja.js";

class Sensei extends Ninja {

    constructor(name){
        super(name)
        this.wisdom = 10;
        this.strength = 10;
        this.speed = 10;
        this.health = 200;
    }

    speakWisdom(){
        this.drinkSake()
        console.log(
            `
            "What one programmer can do in one month, two programmers can do in two months."
            `)
    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();

export default Sensei