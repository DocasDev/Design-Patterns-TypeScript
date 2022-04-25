import { CarFactory } from './classes/factories/CarFactory';
import { MotorcycleFactory } from './classes/factories/MotorcycleFactory';
import { Person } from './classes/Person';
import { Utils } from './classes/Utils';
import { Vehicle } from './classes/Vehicle';
import { Passengers } from './classes/Passengers';

const passengersColletion = new Passengers();
passengersColletion.addPassengers(
	new Person('John Doe'),
	new Person('Arden Sparrow'),
	new Person('Averill Harper'),
	new Person('Jimmie Angel'),
);

const vehicles = new Array<Vehicle>();
const carFactory = new CarFactory();
const motorcycleFactory = new MotorcycleFactory();

vehicles.push(carFactory.getVehicle('ABC 123', 'Toyota Prius', 'White'));
vehicles.push(carFactory.getVehicle('DEF 456', 'Honda Civic', 'Black'));
vehicles.push(carFactory.getVehicle('JLM 789', 'Toyota Corolla', 'Silver'));
vehicles.push(carFactory.getVehicle('NOP 963', 'Volkswagen Beetle', 'White'));
vehicles.push(
	motorcycleFactory.getVehicle('QRS 852', 'Kawasaki Ninja', 'Green'),
);
vehicles.push(motorcycleFactory.getVehicle('TUV 741', 'Yamaha V-Max', 'Black'));

for (let i = 0; i < 10; i++) {
	const amountPassengers = Utils.getRandomNumber(5); //Quantidade de passageiros aleatória
	const passengers = new Array<Person>();

	for (let j = 0; j < amountPassengers; j++) {
		const passenger = passengersColletion.getPassenger(
			Utils.getRandomNumber(passengersColletion.getAmountPassengers()),
		);
		if (passenger !== null) passengers.push(passenger);
	}

	const client = passengers[0];
	const vehicle = vehicles[Utils.getRandomNumber(vehicles.length)];
	if (vehicle.isBusy()) {
		i--;
		console.log();
		continue;
	}
}
