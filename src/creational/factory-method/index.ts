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
	//Quantidade de passageiros aleatória. Mínimo de 1 passageiro
	const amountPassengers = Utils.getRandomNumber(4) + 1;
	const passengers =
		passengersColletion.getRandomsPassengers(amountPassengers);

	//Escolhe o veículo
	const vehicle = vehicles[Utils.getRandomNumber(vehicles.length)];

	//Verifica se o veículo está ocupado.
	if (vehicle.isBusy()) {
		console.log(Utils.pretier`The ${vehicle.getVehicleLabel()} is busy.`);
		continue;
	}

	try {
		//Inicia a viagem
		vehicle.pickUp(...passengers);
		//Aguarda a viagem terminar para liberar o veículo
		setTimeout(() => vehicle.dropOff(), 1);
	} catch (e: unknown) {
		if (e instanceof Error) console.log(e.message);
		continue;
	}
}
