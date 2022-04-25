import { Vehicle } from '../Vehicle';

export abstract class VehicleFactory {
	//Factory Method
	public abstract getVehicle(
		plate: string,
		model: string,
		color: string,
	): Vehicle;
}
