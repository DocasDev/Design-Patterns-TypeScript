import { Car } from './classes/Car';
import { DeluxCarDecorator } from './classes/DeluxCarDecorator';
import { PlusCarDecorator } from './classes/PlusCarDecorator';
import { PrimeCarDecorator } from './classes/PrimeCarDecorator';

const car = new Car('Uber Car');
const deluxCar = new DeluxCarDecorator(car);
const plusCar = new PlusCarDecorator(car);
const primeCar = new PrimeCarDecorator(car);
const plus2Car = new PlusCarDecorator(plusCar);

console.log(car.getName(), car.getPrice());
console.log(deluxCar.getName(), deluxCar.getPrice());
console.log(plusCar.getName(), plusCar.getPrice());
console.log(primeCar.getName(), primeCar.getPrice());
console.log(plus2Car.getName(), plus2Car.getPrice());
