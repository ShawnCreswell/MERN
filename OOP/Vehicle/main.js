import M5 from './M5.js'
import Vehicle from './vehicle.js';

const myM5 = new M5(`Blue`);
// myM5.showStats();

myM5.drive().beep().showStats();

// const myCar = new Vehicle("Suzuki", 'Samurai', 'Pink');