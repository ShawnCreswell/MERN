import Unit from './unit.js'
import Card from './card.js'

class Effect extends Card {
    constructor(name,cost,stat,magnitude){
        super(name,cost)
        this.stat = stat;
        this.magnitude = magnitude;
        let rOrL = "Raise"
        if(magnitude > 0){
            rOrL = "Raise"
        }else {
            rOrL = "Lower"
        }
        this.text = `${rOrL} the targets ${this.stat} by ${Math.floor(this.magnitude)}.`;
    }

    play(target){
        if (target instanceof Unit){
            if(this.stat == "power"){
                target.power += this.magnitude;
                console.log(this.text);
            }else if(this.stat === "res") {
                target.res += this.magnitude
                console.log(this.text);
            }else {
                console.log(`Not an correct move!`);
            }
        }else {
            throw new Error("Targer must be a unit!");
        }
    }
}


//1
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "res", 3);

console.log(`${redBeltNinja.name}'s res: ${redBeltNinja.res}`)
hardAlgorithm.play(redBeltNinja)
console.log(`${redBeltNinja.name}'s res: ${redBeltNinja.res}`)

// 2
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "res", -2);

console.log(`${redBeltNinja.name}'s res: ${redBeltNinja.res}`);
unhandledPromiseRejection.play(redBeltNinja);
console.log(`${redBeltNinja.name}'s res: ${redBeltNinja.res}`);

//3

const pairProgramming = new Effect("Pair Programming", 3, "power", 2);
console.log(`${blackBeltNinja.name}'s res: ${blackBeltNinja.res}`);
redBeltNinja.attack(blackBeltNinja);
console.log(`${blackBeltNinja.name}'s res: ${blackBeltNinja.res}`);



export default Effect