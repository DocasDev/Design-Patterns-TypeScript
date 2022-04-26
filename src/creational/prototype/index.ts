import {
	Car as CarShalowCopy,
	Driver as DriverShalowCopy,
} from './classes/PrototypeShalowCopy';
import {
	Car as CarDeepCopy,
	Driver as DriverDeepCopy,
} from './classes/PrototypeDeepCopy';

//Shalow Copy Prototype
const driverShalowCopy1 = new DriverShalowCopy('John Doe', '20R5508');
const carShalowCopy1 = new CarShalowCopy('ABC 123', 'Toyota Prius', 'White');
carShalowCopy1.attachDriver(driverShalowCopy1);
console.log(carShalowCopy1);

const carShalowCopy2 = carShalowCopy1.clone();
carShalowCopy1.plate = 'DEF 456';
console.log(carShalowCopy2);
console.log(carShalowCopy2.plate);

console.log('---------');

//Deep Copy Prototype
const driverDeepCopy1 = new DriverDeepCopy('John Doe', '20R5508');
const carDeepCopy1 = new CarDeepCopy('ABC 123', 'Toyota Prius', 'White');
carDeepCopy1.attachDriver(driverDeepCopy1);
console.log(driverDeepCopy1);

const carDeepCopy2 = carDeepCopy1.clone();
carDeepCopy1.plate = 'DEF 456';
console.log(carDeepCopy2);
console.log(carDeepCopy2.plate);
