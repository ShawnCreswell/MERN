import Card from './card.js'

class Unit extends Card {

    constructor(name,cost,power,res){
        super(name,cost)
        this.power = power;
        this.res = res;
    }

    attack(target){
        if(target instanceof Unit){
            target.res -= this.power;
            console.log(`${this.name} attacked ${target.name} causing ${this.power} damage`);
        }else {
            throw new Error("Target must be a unit!");
        }
    }
}
export default Unit