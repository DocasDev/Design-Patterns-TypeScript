import { Vehicle } from '../Vehicle';
import { Motorcycle } from '../vehicles/Motorcycle';
import { VehicleFactory } from './VehicleFactory';

export class MotorcycleFactory extends VehicleFactory {
	public getVehicle(plate: string, model: string, color: string): Vehicle {
		return new Motorcycle(plate, model, color);
	}
}
