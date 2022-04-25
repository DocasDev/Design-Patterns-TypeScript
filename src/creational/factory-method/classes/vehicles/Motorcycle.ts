import { Vehicle } from '../Vehicle';

export class Motorcycle extends Vehicle {
	constructor(plate: string, model: string, color: string) {
		super(plate, model, color, 1);
	}
}
