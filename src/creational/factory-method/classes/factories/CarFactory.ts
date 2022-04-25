import { Vehicle } from '../Vehicle';
import { Car } from '../vehicles/Car';
import { VehicleFactory } from './VehicleFactory';

export class CarFactory extends VehicleFactory {
	public getVehicle(plate: string, model: string, color: string): Vehicle {
		return new Car(plate, model, color);
	}
}
